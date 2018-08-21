import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-cardpayment',
  templateUrl: './cardpayment.component.html',
  styleUrls: ['./cardpayment.component.css']
})
export class CardpaymentComponent implements OnInit {
  form5: FormGroup
  uname2: FormControl
  cardNum: FormControl
  cardexpmonth: FormControl
  cardexpyear: FormControl
  cardcvc: FormControl
  payamount: FormControl

  constructor() { }

  ngOnInit() {
    this.uname2 = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]));
    this.cardNum = new FormControl('', Validators.compose([Validators.required, Validators.minLength(16)]));
    this.cardexpmonth = new FormControl('', Validators.compose([Validators.required]));
    this.cardexpyear = new FormControl('', Validators.compose([Validators.required]));
    this.cardcvc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
    this.payamount = new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]));

    this.form5 = new FormGroup({
      uname2: this.uname2,
      cardNum: this.cardNum,
      cardexpmonth: this.cardexpmonth,
      cardexpyear: this.cardexpyear,
      cardcvc: this.cardcvc,
      payamount: this.payamount

    });
  }

}
