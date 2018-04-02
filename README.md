### 安装angular-cli:
```
npm install -g @angular/cli
```
### 新建项目
```
ng g projectName
```
### 安装缺少的文件
```
npm i --save-dev @angular-devkit/core
```
### 安装scss
```
npm install node-sass --save-dev
```
将angular-cli.json文件中的styleExt修改为
"defaults": {
     "styleExt": "scss",
}

### 安装 ng-zorro
```
npm install ng-zorro-antd --save
```
然后在app.module.ts里导入
```
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [ NgZorroAntdModule.forRoot() ]
})
```
### 安装ngx-quill编辑器
```
npm install ngx-quill@1.6.0 --save
```
引入
```
import { QuillModule } from 'ngx-quill'
@NgModule({
  imports: [
    ...,

    QuillModule
  ],
  ...
})
```
在index.html中引入
```
<!--富文本-->
<link href="https://cdn.quilljs.com/1.2.2/quill.snow.css" rel="stylesheet">
<link href="https://cdn.quilljs.com/1.2.2/quill.bubble.css" rel="stylesheet">
```
在组件中使用
```
<quill-editor></quill-editor>
```
### 安装图片裁剪angular2-img-cropper
```
npm i ng2-img-cropper --save
```
引入
```
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
@NgModule({
  declarations: [
    ...,

    ImageCropperComponent
  ],
  providers: [
    CropperSettings
  ]
  ...
})
```
在使用的组件里
```
import { CropperSettings } from 'ng2-img-cropper';
constructor(
    private cropperSettings: CropperSettings
  ) {
  }
```
### 安装echarts
```
npm install --save echarts
```
首先新建echart-option.directive.ts
```
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
  selector: 'echart'
})
export class EChartOptionDirective1 implements OnInit {
  @Input('chartType') chartType: any;

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    echarts.init(this.el.nativeElement).setOption(this.chartType);
  }
}

```
在app.module引入
```
import { EChartOptionDirective1 } from './echart-option.directive';
@NgModule({
  declarations: [
    EChartOptionDirective1
  ],
```
### angular动画实现
```
app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  import: [
    BrowserAnimationsModule
  ],
```
新建一个动画文件夹，animations文件夹，新建fade-in.ts
```
fade-in.ts

import { trigger, style, transition, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate(600, style({ opacity: 1 }))
  ]),
  transition('* => void', [
    animate(600, style({ opacity: 0 }))
  ])
]);
```
在需要引用的地方
```
import { fadeIn } from 'xxxx/fade-in'
@component({
  animations: [ fadeIn ]
})
}
<div [@fadeIn]>已经绑定好动画了</div>
```
### 配置代理服务器

新建 proxy.conf.json，内容如下
```
{
  "/v2": {
    "target": "http://api.douban.com",
    "secure": false,
    "changeOrigin": true
  }
}
ng serve  --proxy-config proxy.conf.json
```

### 使用高德地图

首先在index.html引入 <script type="text/javascript" src="http://webapi.amap.com/maps?v=1.4.2&key=xxxx"></script>
然后找到typings.d.ts添加(这个加了编辑器就不会报错了)
```
declare var AMap: any;
```
然后就是和官网一样的了


### 坑爹问题集合

#### 路由跳转
只有当当前组件里有outlet的时候，<a routerLink></a>才生效，否则只能用router.navigate来跳转

#### 指令管道复用
如果有一个指令或者管道需要再多个组件中使用，直接在每个组件引入会报指令在多个地方用了。（意思就是同一个指令不能在多个组件中使用）

解决办法：
最笨的就是创建多个不同名字的相同指令或管道。
正确的解决办法：
创建一个module作为中间件来引入指令并导出。最后组件引入该module，如下
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeCutDirective } from './time-cut.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimeCutDirective
  ],
  exports: [
    TimeCutDirective
  ]
})

export class TimeCutModule {}

```
