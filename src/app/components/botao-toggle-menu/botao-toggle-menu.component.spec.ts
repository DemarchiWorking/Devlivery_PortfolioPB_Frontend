import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoToggleMenuComponent } from './botao-toggle-menu.component';

describe('BotaoToggleMenuComponent', () => {
  let component: BotaoToggleMenuComponent;
  let fixture: ComponentFixture<BotaoToggleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoToggleMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoToggleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
