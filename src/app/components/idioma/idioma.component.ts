import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/idioma/idioma.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.scss']
})
export class IdiomaComponent implements OnInit {
  idiomaAtual: string = "";
  constructor(private idiomaService: IdiomaService) { 
    this.idiomaService.idiomaAtual$.subscribe((idioma) => {
      this.idiomaAtual = idioma;
        });
  }
  ngOnInit(): void {
  }
  
  alterarIdioma(): void {
    this.idiomaService.definirIdioma(this.idiomaAtual);
  }
  
  alterarIdiomaSite(idioma: string): void {
    var respostaIdioma = this.idiomaService.definirIdioma(idioma);
    return respostaIdioma;
    }
}
//alert(this.idiomaService.obterIdioma() + "test1");
    //this.idiomaAtual = this.idiomaService.obterIdioma();
   // var respostaIdioma = this.idiomaService.definirIdioma(idioma);
    //this.idiomaAtual = idiomaService.obterIdioma();// Aqui você pode atualizar o texto do menu conforme o idioma
  