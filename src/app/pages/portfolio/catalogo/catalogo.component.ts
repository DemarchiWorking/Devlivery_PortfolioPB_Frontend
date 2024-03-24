import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CadastroProjetoModel } from 'src/app/model/request/CadastroProjetoModel';
import { Sessao, SessaoUsuario } from 'src/app/model/sessao';
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
  formularioProjeto = this.formBuilder.group({
    titulo: [''],
    objetivo: [''],
    descricao: [''],
    link: [''],
   // valor: [''],
    foto: [''],
    jwt: ['']
  })
  
  idioma : string = "pt";
  finalFormulario : boolean = false;
  idiomaService: any;

  constructor(
    private formBuilder: FormBuilder,
    private projetoService: ProjetoService,
    private  configStorageService : ConfigStorageService,
    ) { }

  ngOnInit(): void {
    this.configStorageService.aplicarTema();
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


    var novoProjeto : any = {
      titulo: this.formularioProjeto?.value?.titulo!,
      objetivo: this.formularioProjeto?.value?.objetivo!, 
      descricao: this.formularioProjeto?.value?.descricao!,
      foto: this.formularioProjeto?.value?.foto!,
     // valor: this.formularioProjeto?.value?.valor!,
      link: this.formularioProjeto?.value?.link!,
      usuarioId: "",
      jwt: jwt
    }
    
    var tokenJWT : SessaoUsuario = jwt;
    //console.log(JSON.stringify(JSON.parse(tokenJWT.jwt.toString()).token));
    novoProjeto.jwt = jwt; 

    this.projetoService.cadastrarProjeto(novoProjeto)
    .subscribe(resultado => this.sucessoSubmeter(), error => this.falhouSubmeter(error));
    }

    falhouSubmeter(error: any): void {
      alert("ERRO"+error + JSON.stringify(error).toString());
    }
    sucessoSubmeter(): void {
      alert("OK");
    }

}