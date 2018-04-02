import { Component, OnInit } from '@angular/core';
import { JsonToFormdata } from '../json-to-formdata.service';
import { flyIn } from '../../../animations/fly-in';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-find-password',
  templateUrl: './find-password.component.html',
  styleUrls: ['./find-password.component.scss'],
  animations: [
    flyIn
  ]
})
export class FindPasswordComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private jsonToFormdata: JsonToFormdata
  ) {
  }
  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if (this.validateForm.valid) {
      const formData = this.jsonToFormdata.trans(this.validateForm.value);
      console.log(formData);
    }
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
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      phoneNumber      : [ null, [ Validators.required ] ],
      captcha          : [ null, [ Validators.required ] ]
    });
  }

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

}
