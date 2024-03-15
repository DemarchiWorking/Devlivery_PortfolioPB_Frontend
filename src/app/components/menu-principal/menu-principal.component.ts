import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { IdiomaService } from 'src/app/service/idioma/idioma.service';

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
  idiomaAtual: string = "";
  menuNavIdioma = ["Inicio", "Catálogo", "Negócios", "Networking", "Contato"];


  constructor(private idiomaService: IdiomaService) 
  { this.idiomaService.idiomaAtual$.subscribe((idioma) => {
    this.idiomaAtual = idioma;

    switch(this.idiomaAtual)
    {
      case 'pt':
        this.menuNavIdioma = ["Inicio", "Catálogo", "Negócios", "Networking", "Contato"];
        break;
        case 'en':
        this.menuNavIdioma = ["Home", "Catalog", "Business", "Networking", "Contact"];
        break;
      case 'es':
        this.menuNavIdioma = ["Inicio", "Catálogo", "Negocios", "Redes", "Contacto"];
        break;
      default: 
        break;
    }
    // Aqui você pode atualizar o texto do menu conforme o idioma
  });

  }
  ngOnInit(): void {
  }
    
  toggleMenu(){
      this.isMenu = !this.isMenu;
  }
  
  toggleMobileMenu(){
      this.isMobileMenu = !this.isMobileMenu;
  }
  idioma() {
   // this.idiomaSelecionado.emit();
  }
  test()
  {
   // alert(" TESTANDO >> "+this.texto);
  // this.texto = this.idiomaService.obterIdioma();
   // alert(" TESTANDO >> "+this.texto);
  }
  
  }
      