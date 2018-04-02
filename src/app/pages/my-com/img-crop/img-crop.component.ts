import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../../animations/fly-in';

@Component({
  selector: 'app-img-crop',
  templateUrl: './img-crop.component.html',
  styleUrls: ['./img-crop.component.scss'],
  animations: [
    flyIn
  ]
})
export class ImgCropComponent implements OnInit {
  isShowCrop = false;
  imgSrc: string;
  constructor() {
  }
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
  ngOnInit() {
  }

}
