import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplesComponent } from './simples.component';

describe('SimplesComponent', () => {
  let component: SimplesComponent;
  let fixture: ComponentFixture<SimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
