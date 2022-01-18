import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  
  _url = 'https://backend-u7nowymugq-ew.a.run.app/junkietattoos/receiveNewContact/';

  
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

  designtype = [
    { designType: 'Flash' },
    { designType: 'Custom' },
    { designType: 'Nicht bekannt' }
  ];
  days = [
    { preferredDay: 'Montag' },
    { preferredDay: 'Dienstag' },
    { preferredDay: 'Mittwoch' },
    { preferredDay: 'Donnerstag' },
    { preferredDay: 'Freitag' },
    { preferredDay: 'Samstag' },
    { preferredDay: 'Sonntag' }
  ];
  options = [
    { projectInformation: 'Ganztägige Session (Große Projekte / Ganze Körperteile)' },
    { projectInformation: 'Mehrere Tattoos' },
  ];

  times = [
    { preferredTime: 'Vormittags'},
    { preferredTime: 'Mittag'},
    { preferredTime: 'Nachmittag'},

  ]

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _http: HttpClient
    ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      pronouns: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      instagram: new FormControl('', [Validators.required]),
      phonenumber: new FormControl('', [Validators.required]),
    //  image: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      bodypart: this.fb.array([]),
      designType: new FormControl('', [Validators.required]),
      preferredDay: this.fb.array([]),
      preferredTime: new FormControl('', [Validators.required]),
      projectInformation: this.fb.array([]),
      returningCustomer: new FormControl('', [Validators.required])
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
  
  get f(){
    return this.myForm.controls;
  }

  enroll(myForm: FormGroup) {
   return this._http.post<any>(this._url, myForm);
  }
  onSubmit() {
    console.warn('Your order has been submitted', this.myForm.value);
    this.myForm.reset();
    this.enroll(this.myForm.value).subscribe(
      data => console.log('Email sent successfully', data),
      error => console.log('Email didnt sent :(', error)
    )
  }
}