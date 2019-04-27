import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  // signInForm = new FormGroup({
  //   email : new FormControl(''),
  //   password : new FormControl(''),
  //   fulladdress: new FormGroup({
  //     province: new FormControl(''),
  //     address : new FormControl(''),
  //   })
  // });
  signInForm = new FormGroup({
    email : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor() { }

  ngOnInit() {
  }
  onSignIn() {
    console.log(this.signInForm.value);
  }
}
