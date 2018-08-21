import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  form7: FormGroup;
  uname2: FormControl;
  mailid: FormControl;
  msg: FormControl;
  constructor() { }

  ngOnInit() {
    this.uname2 = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]));
    this.mailid = new FormControl('', Validators.compose([Validators.required, Validators.pattern('([a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+[.](?:\[a-zA-Z0-9-]+))')]));
    this.msg = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]));
    this.form7 = new FormGroup({
      uname2: this.uname2,
      mailid: this.mailid,
      msg: this.msg
    });

  }

}
