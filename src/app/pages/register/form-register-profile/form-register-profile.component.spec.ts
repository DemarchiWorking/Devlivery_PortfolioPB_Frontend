import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterProfileComponent } from './form-register-profile.component';

describe('FormRegisterProfileComponent', () => {
  let component: FormRegisterProfileComponent;
  let fixture: ComponentFixture<FormRegisterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
