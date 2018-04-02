import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTimeCut]'
})
export class TimeCutDirective {
  @Input() waitSec: number = 60;
  sec: number;
  constructor(private el: ElementRef) {
    el.nativeElement.innerText = '获取验证码';
  }
  @HostListener('click') click() {
    this.sec = this.waitSec;
    this.timeCut(this.sec);
  }
  private timeCut(sec: number): void {
    this.el.nativeElement.setAttribute('disabled', true);
    this.el.nativeElement.innerText = `${this.sec}秒后重试`;
    setTimeout(() => {
      if (this.sec > 1) {
        this.sec -= 1;
        this.timeCut(this.sec);
      } else {
        this.el.nativeElement.removeAttribute('disabled');
        this.el.nativeElement.innerText = `获取验证码`;
      }
    }, 1000);
  }
}
