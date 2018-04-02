import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImgCropComponent } from './my-img-crop.component';

describe('MyImgCropComponent', () => {
  let component: MyImgCropComponent;
  let fixture: ComponentFixture<MyImgCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyImgCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImgCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
