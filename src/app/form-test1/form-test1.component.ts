import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';

//import { logging } from '../../../node_modules/protractor';

@Component({
  selector: 'app-form-test1',
  templateUrl: './form-test1.component.html',
  styleUrls: ['./form-test1.component.css']
})
export class FormTest1Component implements OnInit {


  constructor() { }

  ngOnInit() {



  }


  onSubmit() {
    console.log('submit called')
  }

}

