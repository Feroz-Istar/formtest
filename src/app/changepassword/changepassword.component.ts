import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor() { }

  form3: FormGroup
  pwdcur: FormControl
  pwdnew: FormControl
  rpwdnew: FormControl

  ngOnInit() {

    this.pwdcur = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})')]));
    this.pwdnew = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})')]));
    this.rpwdnew = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})')]));
    this.form3 = new FormGroup({
      pwdcur: this.pwdcur,
      pwdnew: this.pwdnew,
      rpwdnew: this.rpwdnew
    });
  }

}
