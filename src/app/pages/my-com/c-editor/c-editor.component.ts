import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../../animations/fly-in';

@Component({
  selector: 'app-c-editor',
  templateUrl: './c-editor.component.html',
  styleUrls: ['./c-editor.component.scss'],
  animations: [
    flyIn
  ]
})
export class CEditorComponent implements OnInit {
  content: any;
  constructor() { }
  // 更新文本框内容
  updateContent(event) {
    this.content = event.text;
    console.log(event.text);
  }
  ngOnInit() {
  }

}
