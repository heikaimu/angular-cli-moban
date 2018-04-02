import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEditorComponent } from './c-editor.component';

describe('CEditorComponent', () => {
  let component: CEditorComponent;
  let fixture: ComponentFixture<CEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
