import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  form6: FormGroup
  uname1: FormControl
  uname2: FormControl
  uname3: FormControl
  mailid: FormControl
  cname: FormControl
  web: FormControl
  timezone: FormControl
  pwd2: FormControl
  repeatpassword: FormControl
  constructor() { }

  ngOnInit() {
    this.uname1 = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
    this.uname2 = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
    this.uname3 = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));

    this.mailid = new FormControl('', Validators.compose([Validators.required, Validators.pattern('([a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+[.](?:\[a-zA-Z0-9-]+))')]));
    this.cname = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
    this.web = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
    this.timezone = new FormControl('', Validators.compose([Validators.required]));
    this.pwd2 = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})')]));
    this.repeatpassword = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})')]));



    this.form6 = new FormGroup({
      uname1: this.uname1,
      uname2: this.uname2,
      mailid: this.mailid,
      cname: this.cname,
      web: this.web,
      timezone: this.timezone,
      uname3: this.uname3,
      pwd2: this.pwd2,
      repeatpassword: this.repeatpassword

    });
  }

}
