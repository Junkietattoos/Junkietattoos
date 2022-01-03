import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  
  _url: '';
  
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
    { day: 'Montag' },
    { day: 'Dienstag' },
    { day: 'Mittwoch' },
    { day: 'Donnerstag' },
    { day: 'Freitag' },
    { day: 'Samstag' },
    { day: 'Sonntag' }
  ];
  times = [
    { time: 'Vormittags' },
    { time: 'Mittags' },
    { time: 'Nachmittags' }
  ];
  options = [
    { option: 'Ganztägige Session (Große Projekte / Ganze Körperteile)' },
    { option: 'Mehrere Tattoos' },
  ];

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _http: HttpClient
    ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      Pronouns: new FormControl('', [Validators.required]),
      PreName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Instagram: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
      body: this.fb.array([]),
      DesignType: new FormControl('', [Validators.required]),
      day: this.fb.array([]),
      time: this.fb.array([]),
      option: this.fb.array([]),
      recurring: new FormControl('', [Validators.required]),
      accepted: new FormControl('', [Validators.required])
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
  onChangeDays(day: string, isChecked: boolean) {
    const dayFormArray = <FormArray>this.myForm.controls.day;

    if (isChecked) {
      dayFormArray.push(new FormControl(day));
    } else {
      let index = dayFormArray.controls.findIndex((x) => x.value == day);
      dayFormArray.removeAt(index);
    }
  }
  onChangeTimes(time: string, isChecked: boolean) {
    const timeFormArray = <FormArray>this.myForm.controls.time;

    if (isChecked) {
      timeFormArray.push(new FormControl(time));
    } else {
      let index = timeFormArray.controls.findIndex((x) => x.value == time);
      timeFormArray.removeAt(index);
    }
  }
  onChangeOptions(option: string, isChecked: boolean) {
    const optionFormArray = <FormArray>this.myForm.controls.option;

    if (isChecked) {
      optionFormArray.push(new FormControl(option));
    } else {
      let index = optionFormArray.controls.findIndex((x) => x.value == option);
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
    this.enroll(this.myForm).subscribe(
      data => console.log('yes', data),
      error => console.log('no :(', error)
    )
  }
}