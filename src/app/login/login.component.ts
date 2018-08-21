import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form1: FormGroup;
  uname1: FormControl;
  pwd1: FormControl;
  chkbox1: FormControl;

  constructor() { }

  ngOnInit() {

    this.uname1 = new FormControl('', Validators.compose([Validators.required, Validators.pattern('([a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+[.](?:\[a-zA-Z0-9-]+))')]))
    this.pwd1 = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})')]))
    this.chkbox1 = new FormControl('', Validators.requiredTrue)

    this.form1 = new FormGroup({
      uname1: this.uname1,
      pwd1: this.pwd1,
      chkbox1: this.chkbox1
    });


  }
  onSubmit() {
    console.log('submit called')
  }
}
