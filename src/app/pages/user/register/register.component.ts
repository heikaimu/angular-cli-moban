import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../animations/fade-in';
import { JsonToFormdata } from '../json-to-formdata.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    fadeIn
  ]
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if (this.validateForm.valid) {
      const formData = this.jsonToFormdata.trans(this.validateForm.value);
      console.log(formData);
    }
  }

  constructor(
    private fb: FormBuilder,
    private jsonToFormdata: JsonToFormdata,
    private router: Router
  ) {
  }

  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.validateForm.controls[ 'checkPassword' ].updateValueAndValidity();
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email            : [ null, [ Validators.email ] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      nickname         : [ null, [ Validators.required ] ],
      gender           : [ null, [ Validators.required ] ],
      phoneNumber      : [ null, [ Validators.required ] ],
      captcha          : [ null, [ Validators.required ] ],
      switchValue      : [ false ],
      agree            : [ false ]
    });
  }

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

}
