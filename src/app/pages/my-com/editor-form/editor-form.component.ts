import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-editor-form',
  templateUrl: './editor-form.component.html',
  styleUrls: ['./editor-form.component.scss']
})
export class EditorFormComponent implements OnInit {
  imgSrc: string;
  isShowCrop = false;
  validateForm: FormGroup;
  id: number;
  content: any;
  checkOptionsOne = [
    { label: 'HTML', value: 'HTML', color: 'pink'},
    { label: 'CSS', value: 'CSS', color: 'red' },
    { label: 'Javascript', value: 'Javascript', color: 'orange' },
    { label: 'Jquery', value: 'Jquery', color: 'green' },
    { label: 'Vue', value: 'Vue', color: 'cyan' },
    { label: 'React', value: 'React', color: 'blue' },
    { label: 'Angular', value: 'Angular', color: 'purple' },
    { label: 'Node', value: 'Node', color: 'red' }
  ];
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute
  ) { }
  // 头像
  openCrop() {
    this.isShowCrop = true;
  }
  closeCrop(isShow: boolean) {
    this.isShowCrop = false;
  }
  changeImg(img: string) {
    this.isShowCrop = false;
    this.imgSrc = img;
  }
  // 更新文本框内容
  updateContent(event) {
    this.content = event.text;
  }
  // 校验tag是否选择
  chargeTags = (control: FormControl): any => {
    let isNull = false;
    for (let i = 0; i < control.value.length; i++) {
      const tag = control.value[i];
      if (tag.checked) {
        isNull = true;
      }
    }
    if (!isNull) {
      return { expired: true, error: true};
    }
  }
  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if (this.validateForm.valid && this.content !== null && this.content !== '') {
      alert('提交');
    }
  }
  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.id = data.id;
      this.content = '';
      this.validateForm = this.fb.group({
        title: [ '', [ Validators.required ] ],
        tag: [ [], [ this.chargeTags ] ]
      });
    });
  }

}
