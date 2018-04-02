import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-basic',
  templateUrl: './map-basic.component.html',
  styleUrls: ['./map-basic.component.scss']
})
export class MapBasicComponent implements OnInit {
  infoWindow: any;
  map: any;
  constructor() { }

  ngOnInit() {
    this.map = new AMap.Map('gaodemap-container', {
      esizeEnable: true,
      zoom: 13,
      center: [104.12562, 30.639595]
    });
    const marker = new AMap.Marker({
      position: [104.12562, 30.639595]
    });
    marker.setMap(this.map);
    this.map.plugin(['AMap.ToolBar'], () => {
      this.map.addControl(new AMap.ToolBar());
    });
    const info = [];
    info.push('<div style=\"padding:0px 0px 0px 4px;\"><b>信合御龙山</b>');
    this.infoWindow = new AMap.InfoWindow({
      content: info.join('<br/>'),  // 使用默认信息窗体框样式，显示信息内容
      offset: new AMap.Pixel(0, -28)
    });
    this.infoWindow.open(this.map, this.map.getCenter());
  }

}
