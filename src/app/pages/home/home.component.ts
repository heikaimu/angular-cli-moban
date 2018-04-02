import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fadeIn } from '../../animations/fade-in';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ fadeIn, flyIn ]
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  userRegisterURL = '/mock-data/slide-bar.json';
  webNav = [];
  constructor(
    private http: HttpClient
  ) {
  }
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    this.http.get(this.userRegisterURL).subscribe(data => {
      // Read the result field from the JSON response.
      this.webNav = data['webNav'];
    });
  }

}
