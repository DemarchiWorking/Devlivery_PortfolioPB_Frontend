import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CadastroProjetoModel } from 'src/app/model/request/CadastroProjetoModel';
import { ConfigStorageService } from 'src/app/service/config-storage/config-storage.service';
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
    objetivo: [''],
    descricao: [''],
    link: [''],
   // valor: [''],
    foto: [''],
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
    var novoProjeto : CadastroProjetoModel = {
      titulo: this.formularioProjeto?.value?.titulo!,
      objetivo: this.formularioProjeto?.value?.objetivo!, 
      descricao: this.formularioProjeto?.value?.descricao!,
      foto: this.formularioProjeto?.value?.foto!,
     // valor: this.formularioProjeto?.value?.valor!,
      link: this.formularioProjeto?.value?.link!,
      usuarioId: ""
    }
    alert(novoProjeto!.titulo.toString())

    this.projetoService.cadastrarProjeto(novoProjeto)
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