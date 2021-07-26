import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatClassPopupComponent } from './creat-class-popup.component';

describe('CreatClassPopupComponent', () => {
  let component: CreatClassPopupComponent;
  let fixture: ComponentFixture<CreatClassPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatClassPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatClassPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
