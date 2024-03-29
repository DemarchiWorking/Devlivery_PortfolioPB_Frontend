import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { IdiomaService } from 'src/app/service/idioma/idioma.service';
import { LocalStorageUtils } from 'src/app/service/local-storage/LocalStorageUtils';

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
  logado = false;
  menuNavIdioma //= ["Inicio", "Negócios", "Catálogo", "Networking", "Contato"];
  = [
    { titulo: "inicio", mostrar: true, url: "inicio"},
    { titulo: "negócios", mostrar: true, url: "negocio" },
    { titulo: "catálogo", mostrar: true, url: "catalogo" },
    { titulo: "networking", mostrar: true, url: "networking" },
    { titulo: "contato", mostrar: true, url: "contato" }
  ];

  public localStorage = new LocalStorageUtils();

  constructor(private idiomaService: IdiomaService)
  { this.idiomaService.idiomaAtual$.subscribe((idioma) => {
    this.idiomaAtual = idioma;

    switch(this.idiomaAtual)
    {
      case 'pt':
        this.menuNavIdioma =
          [
            { titulo: "Inicio", mostrar: true , url: "inicio"},
            { titulo: "Negócios", mostrar: true , url: "negocio"},
            { titulo: "Catálogo", mostrar: true, url: "catalogo"  },
            { titulo: "Networking", mostrar: true, url: "networking" },
            { titulo: "Contato", mostrar: true , url: "contato" }
          ];
        break;
        case 'en':
        this.menuNavIdioma =
          [
            { titulo: "Home", mostrar: true , url: "inicio"},
            { titulo: "Business", mostrar: true, url: "negocio" },
            { titulo: "Catalog", mostrar: true, url: "catalogo"  },
            { titulo: "Networking", mostrar: true, url: "networking" },
            { titulo: "Contact", mostrar: true , url: "contato" }
          ];
        break;
        case 'es':
        this.menuNavIdioma =
          [
            { titulo: "Inicio", mostrar: true , url: "inicio"},
            { titulo: "Negocios", mostrar: true, url: "negocio" },
            { titulo: "Catálogo", mostrar: true, url: "catalogo"  },
            { titulo: "Redes", mostrar: true, url: "networking" },
            { titulo: "Contacto", mostrar: true, url: "contato"  }
          ]
          break;
      default:
        break;
    }
    // Aqui você pode atualizar o texto do menu conforme o idioma
  });

  }
  ngOnInit(): void {
    this.verificaSeUsuarioEstaLogado()
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
  verificaSeUsuarioEstaLogado()
  {

    var jwt : any = this.localStorage.getLocalStorageJWT();
    alert("ae"+JSON.stringify(jwt));
    if(jwt != null || jwt != undefined)
    {
      this.logado = true;
      //this.menuNavIdioma = this.menuNavIdioma.filter(item => !item.titulo.toLowerCase().includes('cont'));
      for (const item of this.menuNavIdioma) {
        if (item.titulo.toLowerCase().includes("cont") ) {
          item.mostrar = false;
        }

      }
      alert(JSON.stringify(this.menuNavIdioma));
    }
  }
}

