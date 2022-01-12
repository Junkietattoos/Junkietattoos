import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  
  _url: 'https://backend-u7nowymugq-ew.a.run.app:8080/junkietattoos/receiveNewContact';
  
  bodyParts = [
    { bodyPart: 'Gesicht' },
    { bodyPart: 'Hals' },
    { bodyPart: 'Nacken' },
    { bodyPart: 'Brust' },
    { bodyPart: 'Rippe(Oben, unter der Brust)' },
    { bodyPart: 'Rippe(Mitte)' },
    { bodyPart: 'Unterer Brust Bereich / Oberer Bauch / Underboob' },
    { bodyPart: 'Bauch' },
    { bodyPart: 'Rücken (Gesamter Rücken)' },
    { bodyPart: 'Rücken (Oben)' },
    { bodyPart: 'Rücken (Unten' },
    { bodyPart: 'Gesamter Arm / Full arm sleeve' },
    { bodyPart: 'Oberarm (Biceps)' },
    { bodyPart: 'Oberarm (Triceps)' },
    { bodyPart: 'Oberarm (Innen)' },
    { bodyPart: 'Oberarm (Außen)' },
    { bodyPart: 'Unterarm (Innen)' },
    { bodyPart: 'Unterarm (Außen)' },
    { bodyPart: 'Unterarm (Innen + Außen) / Half arm sleeve' },
    { bodyPart: 'Hand (Rücken)' },
    { bodyPart: 'Hand (Innenfläche)' },
    { bodyPart: 'Gesäß / Po' },
    { bodyPart: 'Gesamtes Bein / Full leg sleeve' },
    { bodyPart: 'Oberschenkel (Vorne)' },
    { bodyPart: 'Oberschenkel (Seite)' },
    { bodyPart: 'Schienbein' },
    { bodyPart: 'Wade' },
    { bodyPart: 'Schienbein + Wade / Half leg sleeve' },
    { bodyPart: 'Füße' },
    { bodyPart: 'Finger' }
  ];

  designs = [
    { design: '1237' },
    { design: '1236' },
    { design: '1235' },
    { design: '1234' },
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
  times = [
    { preferredTime: 'Vormittags' },
    { preferredTime: 'Mittags' },
    { preferredTime: 'Nachmittags' }
  ];
  options = [
    { projectInformation: 'Ganztägige Session (Große Projekte / Ganze Körperteile)' },
    { projectInformation: 'Mehrere Tattoos' },
  ];

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
      image: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      bodypart: this.fb.array([]),
      designtype: new FormControl('', [Validators.required]),
      preferredDay: this.fb.array([]),
      preferredTime: this.fb.array([]),
      projectInformation: this.fb.array([]),
      returningCustomer: new FormControl('', [Validators.required])
        });
  }

  onChangeBodyPart(bodyPart: string, isChecked: boolean) {
    const bodyPartArray = <FormArray>this.myForm.controls.body;

    if (isChecked) {
      bodyPartArray.push(new FormControl(bodyPart));
    } else {
      let index = bodyPartArray.controls.findIndex((x) => x.value == bodyPart);
      bodyPartArray.removeAt(index);
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
  onChangeTimes(preferredTime: string, isChecked: boolean) {
    const timeFormArray = <FormArray>this.myForm.controls.preferredTime;

    if (isChecked) {
      timeFormArray.push(new FormControl(preferredTime));
    } else {
      let index = timeFormArray.controls.findIndex((x) => x.value == preferredTime);
      timeFormArray.removeAt(index);
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
      data => console.log('yes', data),
      error => console.log('no :(', error)
    )
  }
}