import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  signInForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
    fulladdress: new FormGroup({
      province: new FormControl(''),
      address : new FormControl(''),
    })
  });

  constructor() { }

  ngOnInit() {
  }
  onSignIn() {
    console.log(this.signInForm.value);
  }
}
