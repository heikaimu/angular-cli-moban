import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

@Component({
  selector: 'app-my-img-crop',
  templateUrl: './my-img-crop.component.html',
  styleUrls: ['./my-img-crop.component.scss']
})
export class MyImgCropComponent implements OnInit {
  data: any;
  cropperSettings: CropperSettings;
  @Output() changeImg: EventEmitter<string> = new EventEmitter<string>();
  @Output() closeCrop: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  constructor() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 150;
    this.cropperSettings.height = 150;
    this.cropperSettings.croppedWidth = 150;
    this.cropperSettings.croppedHeight = 150;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 330;
    this.cropperSettings.noFileInput = true;
    this.data = {};
  }

  fileChangeListener($event) {
    const image: any = new Image();
    const file: File = $event.target.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (loadEvent: any) => {
      image.src = loadEvent.target.result;
      this.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
  }
  // 确定
  handleSure() {
    this.changeImg.emit(this.data.image);
  }
  // 取消
  handleCancel() {
    this.closeCrop.emit(false);
  }
  ngOnInit() {
  }

}
