import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  //private idiomaSelecionado: string  = "pt"; 
  //private idioma = new BehaviorSubject<string>('pt');
  //idiomaAtual = this.idioma.asObservable();
  private idiomaAtualSubject: BehaviorSubject<string> = new BehaviorSubject<string>('pt');
  public idiomaAtual$: Observable<string> = this.idiomaAtualSubject.asObservable();


  definirIdioma(idioma: string): void {
      this.idiomaAtualSubject.next(idioma);
    /*
    this.idiomaSelecionado = idioma;
    this.idiomaSelecionado. ()*/
  }
  obterIdioma() : string {
    
    return this.idiomaAtualSubject.value;
    /*
    var resposta = this.idiomaSelecionado?.toString();
    if(resposta == undefined)
    {
      return 'pt'
    }
    return resposta;
    */
  }
  /*
  atualizarIdioma(idioma: string) {
    this.idiomaSelecionado = idioma;
    //this.idioma.next(lang);
  }*/
}
