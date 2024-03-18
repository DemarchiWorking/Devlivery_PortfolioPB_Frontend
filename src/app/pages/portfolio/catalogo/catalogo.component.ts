import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CadastroProjetoModel } from 'src/app/model/request/CadastroProjetoModel';
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
    }
    falhouSubmeter(error: any): void {
      alert("ERR"+error+ JSON.parse(error).toString()
      + JSON.stringify(error).toString());
    }
    sucessoSubmeter(): void {
      alert("OK");
    }

}