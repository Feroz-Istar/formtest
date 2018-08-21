import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-verify',
  templateUrl: './login-verify.component.html',
  styleUrls: ['./login-verify.component.css']
})
export class LoginVerifyComponent implements OnInit {

  loginverify: FormGroup;
  uname2: FormControl;
  mailid: FormControl;
  pwd2: FormControl;
  repeatpassword: FormControl;


  constructor() { }

  ngOnInit() {
    this.uname2 = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]));
    this.mailid = new FormControl('', Validators.compose([Validators.required, Validators.pattern('([a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+[.](?:\[a-zA-Z0-9-]+))')]));
    this.pwd2 = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})')]));
    this.repeatpassword = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})')]));

    this.loginverify = new FormGroup({
      uname2: this.uname2,
      mailid: this.mailid,
      pwd2: this.pwd2,
      repeatpassword: this.repeatpassword
    });

  }

  onSubmit() {
    console.log('submit called');
  }

}
