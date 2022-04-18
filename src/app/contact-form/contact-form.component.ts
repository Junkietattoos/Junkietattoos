import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  
  _url = 'https://lilcolorink-prod-u4nlk5tfvq-ew.a.run.app/lilcolorink/receiveNewContact/';
  _devurl = 'https://backend-dev-u7nowymugq-ew.a.run.app/junkietattoos/receiveNewContact/';
  myForm: FormGroup;
  checked = false;
  checkedParts = false;
  checkedDays = false;
  disableButton = false;
  showMsgSuccess = false;
  showMsgError = false;
  
  bodyparts = [
    { bodypart: 'Gesicht' },
    { bodypart: 'Hals' },
    { bodypart: 'Nacken' },
    { bodypart: 'Brust' },
    { bodypart: 'Rippe(Oben, unter der Brust)' },
    { bodypart: 'Rippe(Mitte)' },
    { bodypart: 'Unterer Brust Bereich / Oberer Bauch / Underboob' },
    { bodypart: 'Bauch' },
    { bodypart: 'Rücken (Gesamter Rücken)' },
    { bodypart: 'Rücken (Oben)' },
    { bodypart: 'Rücken (Unten' },
    { bodypart: 'Gesamter Arm / Full arm sleeve' },
    { bodypart: 'Oberarm (Biceps)' },
    { bodypart: 'Oberarm (Triceps)' },
    { bodypart: 'Oberarm (Innen)' },
    { bodypart: 'Oberarm (Außen)' },
    { bodypart: 'Unterarm (Innen)' },
    { bodypart: 'Unterarm (Außen)' },
    { bodypart: 'Unterarm (Innen + Außen) / Half arm sleeve' },
    { bodypart: 'Hand (Rücken)' },
    { bodypart: 'Hand (Innenfläche)' },
    { bodypart: 'Gesäß / Po' },
    { bodypart: 'Gesamtes Bein / Full leg sleeve' },
    { bodypart: 'Oberschenkel (Vorne)' },
    { bodypart: 'Oberschenkel (Seite)' },
    { bodypart: 'Schienbein' },
    { bodypart: 'Wade' },
    { bodypart: 'Schienbein + Wade / Half leg sleeve' },
    { bodypart: 'Füße' },
    { bodypart: 'Finger' }
  ];


  days = [
    { preferredDay: 'Dienstag' },
    { preferredDay: 'Mittwoch' },
    { preferredDay: 'Donnerstag' },
    { preferredDay: 'Freitag' },
    { preferredDay: 'Samstag' }
  ];
  options = [
    { projectInformation: 'Ganztägige Session (Große Projekte / Ganze Körperteile)' },
    { projectInformation: 'Mehrere Tattoos' },
  ];

  times = [ 
  'Vormittags',
  'Mittags',
  'Nachmittags'
  ];


//TODO: In Model auslagern und dann einfach mit Methode holen
  constructor(
    private fb: FormBuilder,
    private _http: HttpClient
    ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      studio: new FormControl('JunkieTattoos', []),
      pronouns: new FormControl(''),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      instagram: new FormControl('', [Validators.required]),
      phonenumber: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      bodypart: this.fb.array([]),
      preferredDay: this.fb.array([]),
      preferredTime: new FormControl('', [Validators.required]),
      projectInformation: this.fb.array([]),
      returningCustomer: new FormControl('', [])
        });
  }

  onChangeBodyPart(bodypart: string, isChecked: boolean) {
    const bodypartArray = <FormArray>this.myForm.controls.bodypart;

    if (isChecked) {
      bodypartArray.push(new FormControl(bodypart));
    } else {
      let index = bodypartArray.controls.findIndex((x) => x.value == bodypart);
      bodypartArray.removeAt(index);
    }
  }
  onChangeDays(preferredDay: string, isChecked: boolean) {
    const dayFormArray = <FormArray>this.myForm.controls.preferredDay;

    if (isChecked) {
      dayFormArray.push(new FormControl(preferredDay));
    } else {
      let index = dayFormArray.controls.findIndex((x) => x.value == preferredDay);
      dayFormArray.removeAt(index);
    }
  }
  onChangeOptions(projectInformation: string, isChecked: boolean) {
    const optionFormArray = <FormArray>this.myForm.controls.projectInformation;

    if (isChecked) {
      optionFormArray.push(new FormControl(projectInformation));
    } else {
      let index = optionFormArray.controls.findIndex((x) => x.value == projectInformation);
      optionFormArray.removeAt(index);
    }
  }
  
  enroll(myForm: any) {
   return this._http.post<any>(this._url, myForm);
  }
  onSubmit() {
    this.enroll(this.myForm.value).subscribe(
      data => {
        this.showMsgSuccess = true;
      },
      error => {
        this.showMsgError = true;
        console.log(error);
            });
    this.disableButton =  true;
  }
}