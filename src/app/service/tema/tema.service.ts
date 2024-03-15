import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  temaAtual : TipoTema = TipoTema.Azul;
  //: 'claro' | 'escuro' = 'claro'; // Definir o tema inicial

  constructor() { }


alternarTema() {
  this.temaAtual = this.temaAtual === TipoTema.Claro ? TipoTema.Azul : TipoTema.Claro;
  // Lógica para aplicar o tema global (por exemplo, atualizar classes CSS)
}
}