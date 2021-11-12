import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import {ContactService} from '../contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

    ngOnInit() {

    this.FormData = this.builder.group({
      Pronouns: new FormControl('', [Validators.required]),
      Firstname: new FormControl('', [Validators.required]),
      Lastname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Instagram: new FormControl('', [Validators.required]),
      Prefix: new FormControl('', [Validators.required]),
      Phonenumber: new FormControl('', [Validators.required]),
      Picture: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required])
      
    });
    }

    onSubmit(FormData) {
  //  console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
    //    console.log(response)
      }, error => {
        console.warn(error.responseText)
    //   console.log({ error })
      })
  }

}
