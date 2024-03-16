import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Projeto } from 'src/app/model/projeto';
import { CadastroProjetoModel } from 'src/app/model/request/CadastroProjetoModel';
import { LocalStorageUtils } from 'src/app/service/local-storage/LocalStorageUtils';
import { ProjetoService } from 'src/app/service/projeto/projeto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  //public localStorage = new LocalStorageUtils();
  formularioProjeto = this.formBuilder.group({
    titulo: [''],
    descricao: [''],
  })
  
  idioma : string = "pt";
  finalFormulario : boolean = false;
  idiomaService: any;

  constructor(
    private formBuilder: FormBuilder,
    private projetoService: ProjetoService,
    ) { }

  ngOnInit(): void {

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
    var projeto : CadastroProjetoModel =  
    {
      "titulo" : "TEST",
      "objetivo" : "TEST",
      "descricao" : "TEST",
      "foto" : "TEST",
      "valor" : 222,
      "link" : "ASDSAD",
      "usuarioId": "test"
    }

    this.projetoService.cadastrarProjeto(projeto)
    .subscribe(resultado => this.sucessoSubmeter(), error => this.falhouSubmeter(error));
    
    
    //location.reload();

    
    /* 
     var t = this.projetoService.cadastrarProjeto(projeto).toPromise();
     alert("FIM");

     return t;   ;(await this.projetoService.cadastrarProjeto(projeto))
    .subscribe(resultado => this.sucessoSubmeter(),
     error => this.falhouSubmeter(error));

  this.projectService.cadastrarProjeto(request).subscribe(
    (response) => {
      console.log('Projeto cadastrado com sucesso!', response);
      // Faça o que for necessário após o cadastro
    },
    (error) => {
      console.error('Erro ao cadastrar projeto:', error);
      // Trate o erro conforme sua necessidade
    */}
  falhouSubmeter(error: any): void {
    alert("ERR"+error+ JSON.parse(error).toString()
    + JSON.stringify(error).toString());
  }
  sucessoSubmeter(): void {
    alert("OK");
  }

}