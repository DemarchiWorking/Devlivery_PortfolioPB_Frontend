import { Component, OnInit } from '@angular/core';
import { ConfigStorageService } from 'src/app/service/config-storage/config-storage.service';

@Component({
  selector: 'app-networking',
  templateUrl: './networking.component.html',
  styleUrls: ['./networking.component.scss']
})
export class NetworkingComponent implements OnInit {

  
  
  constructor(
    private  configStorageService : ConfigStorageService,
  ) { }

  ngOnInit(): void {
    this.configStorageService.aplicarTema();
  }

}
