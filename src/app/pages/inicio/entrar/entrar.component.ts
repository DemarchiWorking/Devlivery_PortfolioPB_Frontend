import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CadastroProjetoModel } from 'src/app/model/request/CadastroProjetoModel';
import { RealizarLoginDTO } from 'src/app/model/request/RealizarLoginDTO';
import { AutenticarService } from 'src/app/service/autenticar/autenticar.service';
import { LocalStorageUtils } from 'src/app/service/local-storage/LocalStorageUtils';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {
  
  public LocalStorage = new LocalStorageUtils();

  constructor(
    private autenticarService : AutenticarService,
    private formBuilder: FormBuilder// NonNullableFormBuilder
  ) { }
  
    formularioLogin = this.formBuilder.group({
      email: [''],
      senha: [''],
    });

  ngOnInit(): void {

  }
    realizarLogin(): any {

      var loginModel : RealizarLoginDTO = {
        email: this.formularioLogin?.value?.email!,
        senha: this.formularioLogin?.value?.senha!,
      }
      var test = this.LocalStorage.obtenInformacoesUsuario();
      this.autenticarService.login(loginModel)
      .subscribe(resultado => this.sucessoSubmeter(), error => this.falhouSubmeter(error));
      }
      falhouSubmeter(error: any): void {
        alert("ERR"+error+ JSON.parse(error).toString()
        + JSON.stringify(error).toString());
      }
      sucessoSubmeter(): void {
        var autenticarUsuarioModel : RealizarLoginDTO = {
          email: this.formularioLogin?.value?.email!,
          senha: this.formularioLogin?.value?.senha!,
        }
        this.LocalStorage.salvarInformacoesPerfil(autenticarUsuarioModel);
        alert("OK");
      }

    logar(){
      alert(this.formularioLogin?.value?.email?.toString());
  }
}

/*

public LocalStorage = new LocalStorageUtils();
  private apiUrl = ''; 

  formulario = this.formBuilder.group({
    email: [''],
    senha: [''],
    });

  
  idioma : string = "pt";
  finalFormulario : boolean = false;
  constructor(private formBuilder: FormBuilder, 
    private idiomaService: IdiomaService,
    private projectService: ProjetoService,
    
    
    ) { 
    this.idioma = idiomaService.obterIdioma();
  }

  ngOnInit(): void {
  }
  onNextStep(bool : boolean) {
    alert(this.finalFormulario)
    this.finalFormulario = !bool;
  }
  obterIdioma(){
    var idioma = this.idiomaService.obterIdioma();
  }

  cadastrarNovoProjeto() {
    var request : CadastroProjetoModel =  
    {
      "titulo" : "TEST",
      "objetivo" : "TEST",
      "descricao" : "TEST",
      "foto" : "TEST",
      "valor" : 222,
      "link" : "ASDSAD",
      "usuarioId": "1"
    }
    var test = this.projectService.cadastrarProjeto(request).subscribe(
    (response) => {
      console.log('Projeto cadastrado com sucesso!', response);

    },
    (error) => {
      console.error('Erro ao cadastrar projeto:', error);
    }
  );*/



/*  
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
private formBuilder: NonNullableFormBuilder, // NonNullableFormBuilder
logar(){
}
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