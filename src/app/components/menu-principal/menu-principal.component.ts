import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
  animations: [ 
    trigger('opacityScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(.95)' }),
        animate('100ms ease-out', style({  opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('75ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
      ])
    ])
  ]
})
export class MenuPrincipalComponent implements OnInit {
  isMenu = false;
  isMobileMenu = false;

  constructor() { }
  ngOnInit(): void {
  }
    
  toggleMenu(){
      this.isMenu = !this.isMenu;
  }
  
  toggleMobileMenu(){
      this.isMobileMenu = !this.isMobileMenu;
  }
  }
      