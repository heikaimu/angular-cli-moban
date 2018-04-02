import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../../animations/fly-in';

@Component({
  selector: 'app-update-avatar',
  templateUrl: './update-avatar.component.html',
  styleUrls: ['./update-avatar.component.scss'],
  animations: [
    flyIn
  ]
})
export class UpdateAvatarComponent implements OnInit {
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
