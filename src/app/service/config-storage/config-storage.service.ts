import { Injectable } from '@angular/core';
import { LocalStorageUtils } from '../local-storage/LocalStorageUtils';
import { ConfigureStorage } from 'src/app/model/config-storage';

@Injectable({
  providedIn: 'root'
})
export class ConfigStorageService {

  constructor() { }
  
  public LocalStorage = new LocalStorageUtils();
  
  aplicarTema(): void {
    var config: ConfigureStorage | undefined = this.LocalStorage.getConfiguracoes();
    if(config.tema == undefined)
    {
      config.tema = false;
    }
    document.body.classList.toggle('dark', config?.tema);
  
  
  }

  obterIdioma(): string {
    var config: ConfigureStorage | undefined = this.LocalStorage.getConfiguracoes();
    if(config?.idioma === undefined) { config.idioma = 'pt' }
    if(config?.idioma === null) { config.idioma = 'pt' }

    return config.idioma;
  }
}
