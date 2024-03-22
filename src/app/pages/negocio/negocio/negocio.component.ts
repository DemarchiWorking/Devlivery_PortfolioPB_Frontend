import { Component, OnInit } from '@angular/core';
import { ConfigStorageService } from 'src/app/service/config-storage/config-storage.service';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.scss']
})
export class NegocioComponent implements OnInit {

  constructor(
    private  configStorageService : ConfigStorageService,
  ) { }


  ngOnInit(): void {
    this.configStorageService.aplicarTema()
  }

}
