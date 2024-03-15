import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoTemComponent } from './botao-tem.component';

describe('BotaoTemComponent', () => {
  let component: BotaoTemComponent;
  let fixture: ComponentFixture<BotaoTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoTemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
