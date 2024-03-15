import { Component, Input, Output } from '@angular/core';
import { IdiomaService } from './service/idioma/idioma.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevliveryPortfolioPBFrontend';
  idiomaAtual : string | undefined = "";
  modoDark : boolean = false;


  
    constructor(private idiomaService: IdiomaService)
      {
        this.idiomaAtual = idiomaService.obterIdioma();
      }
      
    

  toggleTheme() {
    this.modoDark = !this.modoDark;
    document.body.classList.toggle('dark', this.modoDark); // Adiciona ou remove a classe 'dark' no <body>
  }

  idiomaSelecionado() : any {
    //this.idiomaAtual = 
  }
  alterarIdioma()
  {

  }
 

}
