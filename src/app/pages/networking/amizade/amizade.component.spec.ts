import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmizadeComponent } from './amizade.component';

describe('AmizadeComponent', () => {
  let component: AmizadeComponent;
  let fixture: ComponentFixture<AmizadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmizadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmizadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
