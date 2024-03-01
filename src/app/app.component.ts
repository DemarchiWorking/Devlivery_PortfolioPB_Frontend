import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevliveryPortfolioPBFrontend';


  isDarkMode = false; // Inicialmente, use o tema claro

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode); // Adiciona ou remove a classe 'dark' no <body>
  }
}
