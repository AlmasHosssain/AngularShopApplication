import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoMasterComponent } from './step-two-master.component';

describe('StepTwoMasterComponent', () => {
  let component: StepTwoMasterComponent;
  let fixture: ComponentFixture<StepTwoMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
