import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-editor',
  templateUrl: './my-editor.component.html',
  styleUrls: ['./my-editor.component.scss']
})
export class MyEditorComponent implements OnInit {

  @Input('content') content: any;
  @Output() updateContent = new EventEmitter<{text: string}>();
  modules = {};
  constructor() {
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video']                         // link and image, video
      ]
    };
  }
  // 内容变化执行
  logChange($event: any) {
    this.updateContent.emit({text: $event.html});
  }
  getContent() {
    console.dir(this.content);
  }
  ngOnInit() {
  }

}
