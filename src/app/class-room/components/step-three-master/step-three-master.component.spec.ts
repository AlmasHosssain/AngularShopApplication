import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeMasterComponent } from './step-three-master.component';

describe('StepThreeMasterComponent', () => {
  let component: StepThreeMasterComponent;
  let fixture: ComponentFixture<StepThreeMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepThreeMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
