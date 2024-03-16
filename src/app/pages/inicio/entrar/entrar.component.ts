import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageUtils } from 'src/app/service/local-storage/LocalStorageUtils';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {
  
  public LocalStorage = new LocalStorageUtils();


  constructor(
    private formBuilder: FormBuilder// NonNullableFormBuilder
  ) { }
  
    formularioLogin = this.formBuilder.group({
      email: [''],
      senha: [''],
    });
  

  ngOnInit(): void {

  }


  logar(){
    alert(this.formularioLogin?.value?.email?.toString());
    this.LocalStorage.salvarInformacoesPerfil("test");
    var test = this.LocalStorage.obtenInformacoesUsuario();
    alert(test);
  }
/*
    this.LocalStorage.limparDadosLocaisUsuario();
    console.log(this.formulario.value)
    this.conta.logar(this.formulario.value)
    .subscribe(resultado => {

      //sessionStorage.setItem('usuarioLogado', JSON.stringify(resultado));
      this.LocalStorage.salvarDadosLocaisUsuario(resultado);
      this.localizarPerfil(this.formulario.value.email!);
      
      setTimeout(() => {
        this.router.navigate(['conta/perfil']);
      },500);
      }, error => this.falhouSubmeter(error))
    }

    localizarPerfil(email : string){
      this.conta.buscarPorEmail(email)
        .subscribe(resultado => {
          this.LocalStorage.salvarInformacoesPerfil(JSON.stringify(resultado));
          console.log("Encontrou"+ resultado)
        }, error => 
          console.log("Falhou"+ error)
        )
    }

    cancelarConta(){
    // this.location.back();
    }
*/
}

/*
import { Component, OnInit } from '@angular/core';
import { Carousel } from 'flowbite';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})

interface CarouselItem {
  position: number;
  el: HTMLElement | null;
}

interface CarouselOptions {
  defaultPosition: number;
  interval: number;
  indicators: {
    activeClasses: string;
    inactiveClasses: string;
    items: CarouselItem[];
  };
  onnext: () => void;
  onprev: () => void;
  onchange: () => void;
}
  
interface InstanceOptions {
  id: string;
  override: boolean;
}

export class EntrarComponent implements OnInit {
  carouselElement: HTMLElement | null = document.getElementById('carousel-example');
  InstanceOptions: InstanceOptions = {
    id: 'carousel-example',
    override: true,
  };

  constructor() { }
  
  items: CarouselItem[] = [
    {
      position: 0,
      el: document.getElementById('carousel-item-1'),
    },
    {
      position: 1,
      el: document.getElementById('carousel-item-2'),
    },
    {
      position: 2,
      el: document.getElementById('carousel-item-3'),
    },
    {
      position: 3,
      el: document.getElementById('carousel-item-4'),
    },
  ];
  options: CarouselOptions = {
        defaultPosition: 1,
        interval: 3000,
        indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: [
            {
              position: 0,
              el: document.getElementById('carousel-indicator-1'),
            },
            {
              position: 1,
              el: document.getElementById('carousel-indicator-2'),
            },
            {
              position: 2,
              el: document.getElementById('carousel-indicator-3'),
            },
            {
              position: 3,
              el: document.getElementById('carousel-indicator-4'),
            },
          ],
        },
        onnext: () => {
          console.log('Next slider item is shown');
        },
        onprev: () => {
          console.log('Previous slider item is shown');
        },
        onchange: () => {
          console.log('New slider item has been shown');
        },
      };
ngOnInit(): void {}


  

}
*/