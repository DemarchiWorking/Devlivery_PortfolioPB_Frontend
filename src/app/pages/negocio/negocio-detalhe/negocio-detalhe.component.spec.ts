import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioDetalheComponent } from './negocio-detalhe.component';

describe('NegocioDetalheComponent', () => {
  let component: NegocioDetalheComponent;
  let fixture: ComponentFixture<NegocioDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegocioDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegocioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
