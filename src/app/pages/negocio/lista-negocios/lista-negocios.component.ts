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
  selector: 'app-lista-negocios',
  templateUrl: './lista-negocios.component.html',
  styleUrls: ['./lista-negocios.component.scss']
})
export class ListaNegociosComponent implements OnInit {

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
    valor: [''],
    foto: [''],
    jwt: ['']
  })

  ngOnInit(): void {
    this.configStorageService.aplicarTema();
    this.catalogoNegocios = this.obterProjetos();
  }
  obterProjetos() : any
  {
    var jwt : any = this.localStorage.getLocalStorageJWT();

    var parseToken = JSON.stringify(jwt.jwt.token);
    this.tokenJWT = parseToken
    

    //var tokenJWT : any = jwt;
    //console.log("jw"+ this.authService.parseAnyInToken(tokenJWT) )
    //console.log("jw"+ this.authService.parseAnyInTokenNN(jwt))
    var respostaCadastro = this.negocioService.obterProjetos(this.tokenJWT)
    .subscribe(resultado => 
      {
        this.catalogoNegocios = resultado;
        alert(resultado)
        alert(JSON.stringify(resultado[0]))
        return resultado;
      }, error =>
      {
        alert("err")
        return null;
      }
      );

    console.log(respostaCadastro);
    console.log(respostaCadastro.unsubscribe);
  }



    falhouSubmeter(error: any): void {
      alert("ERRO"+ error);
    }
    sucessoSubmeter(): void {
      alert("Sucesso ao cadastrar Projeto");
      this.router.navigate(['catalogo']);
    }
    obterIdioma(){
      var idioma = this.idiomaService.obterIdioma();
    }



}
