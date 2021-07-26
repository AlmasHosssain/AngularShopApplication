import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneMasterComponent } from './step-one-master.component';

describe('StepOneMasterComponent', () => {
  let component: StepOneMasterComponent;
  let fixture: ComponentFixture<StepOneMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepOneMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOneMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
