import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEchartComponent } from './c-echart.component';

describe('CEchartComponent', () => {
  let component: CEchartComponent;
  let fixture: ComponentFixture<CEchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
