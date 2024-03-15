import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  constructor(
    //private localStorageService: LocalStorageService,
    //private formBuilder: FormBuilder
    ) {}
  /*
  formularioLogin = this.formBuilder.group({
    login: [''],
    senha: [''],
  })*/

  ngOnInit(): void {
  }

  setUsuarioLogado() {
    var usuario : any = {
      login: "",//this.formularioLogin?.value?.login!,
      senha: ""//this.formularioLogin?.value?.senha!,
     }
    console.log(usuario);

    //usuario: string
    //this.localStorageService.set('usuario', "usuario");
    
    
    console.log(usuario);
    console.log(usuario);
    
    //var usuario = JSON.parse(this.localStorageService.get(usuario)).usuarioId;

    alert(this.getUsuarioLogado())
  }

  test()
  {
    alert("TEST333");
  }
  getUsuarioLogado(): string | null {
    //var test = this.localStorageService.get('usuario');
    //alert(test);
    //return this.localStorageService.get('usuario');
    return null;
  }

  deslogarUsuario(): void {
  //this.localStorageService.remove('usuario');
  }

}
