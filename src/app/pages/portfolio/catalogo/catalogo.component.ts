import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageUtils } from 'src/app/service/local-storage/LocalStorageUtils';

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

  constructor(private formBuilder: FormBuilder) { }

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

  cadastrarNovoProjeto() {
    var request =  
    {
      "Titulo" : "TEST",
      "Objetivo" : "TEST",
      "Descricao" : "TEST",
      "Foto" : "TEST",
      "Valor" : 222,
      "Link" : "ASDSAD",
      "UsuarioId": "test"
    }
    alert(request.Titulo)
    /*
  this.projectService.cadastrarProjeto(request).subscribe(
    (response) => {
      console.log('Projeto cadastrado com sucesso!', response);
      // Faça o que for necessário após o cadastro
    },
    (error) => {
      console.error('Erro ao cadastrar projeto:', error);
      // Trate o erro conforme sua necessidade
    */}

}