import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigureStorage } from 'src/app/model/config-storage';
import { StatusEnum } from 'src/app/model/enum/StatusEnum';
import { CadastroProjetoModel } from 'src/app/model/request/CadastroProjetoModel';
import { RealizarLoginDTO } from 'src/app/model/request/RealizarLoginDTO';
import { Alerta } from 'src/app/model/response/alerta';
import { AutenticarService } from 'src/app/service/autenticar/autenticar.service';
import { ConfigStorageService } from 'src/app/service/config-storage/config-storage.service';
import { LocalStorageUtils } from 'src/app/service/local-storage/LocalStorageUtils';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss'],
  animations: [
    trigger('alert', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(500)),
    ]),
  ]})


export class EntrarComponent implements OnInit {
  
  public LocalStorage = new LocalStorageUtils();
  constructor(
    private router: Router,
    private  configStorageService : ConfigStorageService,
    private autenticarService : AutenticarService,
    private formBuilder: FormBuilder// NonNullableFormBuilder
  ) { }
    mostrarAlertaToast : boolean = false;
    formularioLogin = this.formBuilder.group({
      email: [''],
      senha: [''],
    });


    showAlert = false;
    alerta : Alerta = {
      titulo: "Carregando",
      texto: "...",
      tipoAlerta: StatusEnum.INICIO,
      dados: "",
      status: 0,
      mostrar: false
    }

  ngOnInit(): void {
    this.configStorageService.aplicarTema();
    //this.idioma = this.configStorageService.obterIdioma();
  }

  invalidLogin() {
    this.showAlert = true;
    setTimeout(() => (this.showAlert = false), 6000);
  }

  realizarLogin(): any {

      var loginModel : RealizarLoginDTO = {
        email: this.formularioLogin?.value?.email!,
        senha: this.formularioLogin?.value?.senha!,
        jwt: ""
      }
      if(loginModel.email.toString() === "")
      {
        alert('Digite um login e uma senha !');
        return;
      }
      if(loginModel?.email != undefined){
        if(loginModel?.senha != undefined){
          this.LocalStorage.obtenInformacoesUsuario();
          this.autenticarService.login(loginModel)
          .subscribe(resultado => this.sucessoSubmeter(resultado), error => this.falhouSubmeter(error));
        }

        
        
      }else{

        alert('vazio');
      }
    }
    falhouSubmeter(error: any): void {
        var alerta : Alerta = {
          titulo: error?.error.titulo.toString(),
          dados: "",
          status: 400,
          texto: "Não foi possível identificar usuário.",
          tipoAlerta: StatusEnum.ERRO,
          mostrar : true
    }
    this.setAlertaToast(alerta);
    this.invalidLogin();
    alert("ERR"+error+ JSON.parse(error).toString()
        + JSON.stringify(error).toString());
    }
    sucessoSubmeter(resultado: any): void {
      
      var jwt = JSON.stringify(resultado);
      console.log("aaaq"+jwt)
    
      var autenticarUsuarioModel : RealizarLoginDTO = {
        email: this.formularioLogin?.value?.email!,
        senha: this.formularioLogin?.value?.senha!,
        jwt: JSON.parse(jwt)
      }
      //alert(jwt);
      //console.log(JSON.parse(jwt.token.toString()));
      this.LocalStorage.salvarInformacoesPerfil(JSON.stringify(autenticarUsuarioModel));
      this.router.navigate(['networking']);
      }

    logar(){
      alert(this.formularioLogin?.value?.email?.toString());
  }

  setAlertaToast(alerta : Alerta)
  {
    this.alerta.titulo = alerta.titulo;
    this.alerta.texto = alerta.texto;
    this.alerta.tipoAlerta = alerta.tipoAlerta;
    this.alerta.dados = alerta.dados;
    this.alerta.status = alerta.status;  
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