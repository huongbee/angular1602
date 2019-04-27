import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

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
      isGmail
    ]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      // Validators.pattern(/([0-9]+)/)
    ]),
    re_password : new FormControl('', [
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
  checkInputValid(inputName) {
    const input = this.signInForm.get(inputName);
    return input.touched && input.invalid;
  }
  passwordMustMatch() {
    const pw = this.signInForm.get('password');
    const rePw = this.signInForm.get('re_password');
    if (pw.valid && rePw.touched && pw.value !== rePw.value) {
      return false; // not match
    }
    return true;
  }

}
function isGmail(control: AbstractControl): ValidationErrors | null {
  if ((control.value as string).trim().endsWith('@gmail.com')) {
    return null; // input valid
  }
  return { error: 'email invalid' };
}
