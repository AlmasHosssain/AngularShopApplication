import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoreAccessCodeFormComponent } from './retore-access-code-form.component';

describe('RetoreAccessCodeFormComponent', () => {
  let component: RetoreAccessCodeFormComponent;
  let fixture: ComponentFixture<RetoreAccessCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetoreAccessCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoreAccessCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
