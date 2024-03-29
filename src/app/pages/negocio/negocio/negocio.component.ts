import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Negocio } from 'src/app/model/negocio';
import { CadastroNegocioDTO } from 'src/app/model/request/CadastroNegocioDTO';
import { SessaoUsuario } from 'src/app/model/sessao';
import { AutenticarService } from 'src/app/service/autenticar/autenticar.service';
import { ConfigStorageService } from 'src/app/service/config-storage/config-storage.service';
import { LocalStorageUtils } from 'src/app/service/local-storage/LocalStorageUtils';
import { NegocioService } from 'src/app/service/negocio/negocio.service';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.scss']
})
export class NegocioComponent implements OnInit {


  public localStorage = new LocalStorageUtils();

  constructor(
    private formBuilder: FormBuilder,
    private negocioService: NegocioService,
    private  configStorageService : ConfigStorageService,
    private router: Router,
    private authService : AutenticarService
    ) { }

    idioma : string = "pt";
    idiomaService: any;
    tokenJWT : any;
    public catalogoNegocios : Negocio[] = [];

  formularioNegocio= this.formBuilder.group({
    nome: [''],
    setor: [''],
    descricao: [''],
    link: [''],
  })

  ngOnInit(): void {
    this.configStorageService.aplicarTema();
   // this.catalogoNegocios = this.obterProjetos();
  }

  cadastrarNovoProjeto(): any {

    var jwt : any = this.localStorage.getLocalStorageJWT();

    var novoNegocio : CadastroNegocioDTO = {
      negocioId: "",
      nome: this.formularioNegocio?.value?.nome!,
      setor: this.formularioNegocio?.value?.setor!,
      descricao: this.formularioNegocio?.value?.descricao!,
      link: this.formularioNegocio?.value?.link!,
      criacao: new Date(),
      usuarioId: "",
      jwt: jwt
    }

    var tokenJWT : SessaoUsuario = jwt;
    //console.log(JSON.stringify(JSON.parse(tokenJWT.jwt.toString()).token));
    novoNegocio.jwt = jwt;

    alert(JSON.stringify(novoNegocio.jwt));

    var respostaCadastro = this.negocioService.cadastrarNegocio(novoNegocio)
    .subscribe(resultado => this.sucessoSubmeter(), error => this.falhouSubmeter(error));

    //if(respostaCadastro.)
  }


    falhouSubmeter(error: any): void {
      alert("ERRO"+ JSON.stringify(error));
    }
    sucessoSubmeter(): void {
      alert("Sucesso ao cadastrar Projeto");
      this.router.navigate(['catalogo']);
    }
    obterIdioma(){
      var idioma = this.idiomaService.obterIdioma();
    }
}
