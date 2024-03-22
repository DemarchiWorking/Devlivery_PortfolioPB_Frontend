import { Component, OnInit } from '@angular/core';
import { ConfigStorageService } from 'src/app/service/config-storage/config-storage.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {

  constructor(
    private  configStorageService : ConfigStorageService,
  ) { }
  public data : any = "slide";
  ngOnInit(): void {
    this.configStorageService.aplicarTema()
  }

}
