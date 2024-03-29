import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { JWT } from 'src/app/model/jwt';
import { Projeto } from 'src/app/model/projeto';
import { CadastroProjetoModel } from 'src/app/model/request/CadastroProjetoModel';
import { Sessao, SessaoUsuario } from 'src/app/model/sessao';
import { AutenticarService } from 'src/app/service/autenticar/autenticar.service';
import { ConfigStorageService } from 'src/app/service/config-storage/config-storage.service';
import { LocalStorageUtils } from 'src/app/service/local-storage/LocalStorageUtils';
import { ProjetoService } from 'src/app/service/projeto/projeto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  public localStorage = new LocalStorageUtils();
  public listaProjetos: any = [
    {"lIVRO": "test"},
    {"test1": "test1"},
    {"test3": "test3"},
  ];

  formularioProjeto = this.formBuilder.group({
    titulo: [''],
    objetivo: [''],
    descricao: [''],
    link: [''],
    valor: [''],
    foto: ['']
  })

  idioma : string = "pt";
  finalFormulario : boolean = false;
  idiomaService: any;
  tokenJWT : any;
  public catalogoProjetos : Projeto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private projetoService: ProjetoService,
    private  configStorageService : ConfigStorageService,
    private router: Router,
    private authService : AutenticarService
    ) { }

  ngOnInit(): void {
    this.configStorageService.aplicarTema();
    this.catalogoProjetos = this.obterProjetos();
  }

  obterProjetos() : any
  {

    var tokenJWT : JWT =
    {
      autenticado : false,
      expiracao: "",
      mensagem: "",
      token: "",
      usuario: "",
    };
    //console.log("jw"+ this.authService.parseAnyInToken(tokenJWT) )
    //console.log("jw"+ this.authService.parseAnyInTokenNN(jwt))


    var respostaCadastro = this.projetoService.obterProjetos().subscribe(resultado =>
      {
        alert(resultado)
        this.catalogoProjetos = resultado;
      }
      , error =>
      {
        alert("Error"+error);
      }
      );
      respostaCadastro.unsubscribe;
  }

  submeterProjeto(){
   // var usuarioId = JSON.parse(this.localStorage.obtenInformacoesUsuario()).usuarioId;
    var publicacao : any = {
      titulo: this.formularioProjeto?.value?.titulo!,
      descricao: this.formularioProjeto?.value?.descricao!,
    }
    alert(publicacao.toString());
  }
  onNextStep(bool : boolean) {
    alert(this.finalFormulario)
    this.finalFormulario = !bool;
  }
  obterIdioma(){
    var idioma = this.idiomaService.obterIdioma();
  }

  cadastrarNovoProjeto(): any {

    var jwt : any = this.localStorage.getLocalStorageJWT();

    var novoProjeto : CadastroProjetoModel = {
      projetoId: "",
      titulo: this.formularioProjeto?.value?.titulo!,
      objetivo: this.formularioProjeto?.value?.objetivo!,
      descricao: this.formularioProjeto?.value?.descricao!,
      foto: this.formularioProjeto?.value?.foto!,
      valor: 0,
      link: this.formularioProjeto?.value?.link!,
      usuarioId: "",
      jwt: jwt
    }

    var tokenJWT : SessaoUsuario = jwt;
    //console.log(JSON.stringify(JSON.parse(tokenJWT.jwt.toString()).token));
    novoProjeto.jwt = jwt;


    var respostaCadastro = this.projetoService.cadastrarProjeto(novoProjeto)
    .subscribe(resultado => this.sucessoSubmeter(), error => this.falhouSubmeter(error));

    //if(respostaCadastro.)
  }


    falhouSubmeter(error: any): void {
      alert("ERRO"+ error);
    }
    sucessoSubmeter(): void {
      alert("Sucesso ao cadastrar Projeto");
      this.router.navigate(['catalogo']);
    }

}
