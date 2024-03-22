import { Component, OnInit } from '@angular/core';
import { ConfigStorageService } from 'src/app/service/config-storage/config-storage.service';

@Component({
  selector: 'app-amizade',
  templateUrl: './amizade.component.html',
  styleUrls: ['./amizade.component.scss']
})
export class AmizadeComponent implements OnInit {

  constructor(
    private  configStorageService : ConfigStorageService,
  ) { }

  ngOnInit(): void {
    this.configStorageService.aplicarTema()
  }

}
