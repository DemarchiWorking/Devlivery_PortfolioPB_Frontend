import { Component, Input, Output } from '@angular/core';
import { IdiomaService } from './service/idioma/idioma.service';
import { LocalStorageUtils } from './service/local-storage/LocalStorageUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevliveryPortfolioPBFrontend';
  idiomaAtual : string | undefined = "";
  modoDark : boolean = false;

  THEME_KEY = 'theme';
  temaDark = 'dark';
  temaLight = 'light';

    public LocalStorage = new LocalStorageUtils();
    constructor(
      private idiomaService: IdiomaService,
      )
      {
        this.idiomaAtual = idiomaService.obterIdioma();
      }
      
  getConfig(): string {
    var config = localStorage.getItem('config');
    var resposta = JSON.stringify(config);

    return resposta;
  }
  toggleTheme() {
    this.modoDark = !this.modoDark;
    //document.body.classList.remove('dark');
    document.body.classList.toggle('dark', this.modoDark); // Adiciona ou remove a classe 'dark' no <body>
    this.LocalStorage.setarConfiguracoes(this.modoDark!.toString(),this.idiomaAtual!.toString())
    window.onload;
    //   this.LocalStorage.salvarInformacoesPerfil(JSON.stringify(autenticarUsuarioModel));this.router.navigate(['networking']);
  }

  idiomaSelecionado() : any {
    //this.idiomaAtual = 
  }
  alterarIdioma(){}
 
}
