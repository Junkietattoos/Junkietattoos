import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import {ContactService} from '../contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  _courseList:Course[];
  _student: Student;
  _studentList: Student[] =[];
  uniqueKey: number = 0;

  ngOnInit() {
    this.getCourses();
    this._student = new Student();
  }


  getCourses() {
    this._courseList=[
      {id:1, name:"Gesicht", isSelected:false},
      {id:2, name:"Hals", isSelected:false},
      {id:3, name:"Nacken", isSelected:false},
      {id:4, name:"Brust", isSelected:false},
      {id:5, name:"Rippe (Oben, unter der Brust)", isSelected:false},
      {id:6, name:"Rippe (Mitte)", isSelected:false},
      {id:7, name:"Unterer Brust Bereich / Oberer Bauch / Underboob", isSelected:false},
      {id:8, name:"Bauch", isSelected:false},
      {id:9, name:"Rücken (Gesamter Rücken)", isSelected:false},
      {id:10, name:"Rücken (Oben)", isSelected:false},
      {id:11, name:"Rücken (Unten)", isSelected:false},
      {id:12, name:"Gesamter Arm", isSelected:false},
      {id:13, name:"Oberarm (Biceps)", isSelected:false},
      {id:14, name:"Oberarm (Triceps)", isSelected:false},
      {id:15, name:"Oberarm (Innen)", isSelected:false},
      {id:16, name:"Oberarm (Außen)", isSelected:false},
      {id:17, name:"Unterarm (Innen)", isSelected:false},
      {id:18, name:"Unterarm (Außen)", isSelected:false},
      {id:19, name:"Hand (Rücken)", isSelected:false},
      {id:20, name:"Hand (Innenfläche)", isSelected:false},
      {id:21, name:"Gesäß / Po", isSelected:false},
      {id:22, name:"Gesamtes Bein", isSelected:false},
      {id:23, name:"Oberschenkel (Vorne)", isSelected:false},
      {id:24, name:"Oberschenkel (Seite)", isSelected:false},
      {id:25, name:"Schienbein", isSelected:false},
      {id:26, name:"Wade", isSelected:false},
      {id:27, name:"Schienbein", isSelected:false},
      {id:28, name:"Füße", isSelected:false}

    ]
  }

  onChange(){
    console.log(this._courseList);
  }

  onSubmit(){
    this._student.courseId = this._courseList.filter(x=>x.isSelected==true).map(x=>x.id).join(",").toString();
    this._student.courseName = this._courseList.filter(x=>x.isSelected==true).map(x=>x.name).join(",").toString();
    this.uniqueKey = this.uniqueKey + 1;
    this._student.id = this.uniqueKey;
    this._studentList.push(this._student);
  }

  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }


  

   /** this.FormData = this.builder.group({
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
  }* */

}

class Course {
  id: number;
  name: string;
  isSelected: boolean;
}
class Student{
  id:number;
  name:string;
  courseId: string;
  courseName: string;
  preName: string;
  pronouns: string;
  email: string;
  insta: string;
  phone: string;
}