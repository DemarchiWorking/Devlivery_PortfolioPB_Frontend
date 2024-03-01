/*import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss'],
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
export class MenuNavComponent implements OnInit {

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
*/