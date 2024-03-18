import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CadastroUsuarioDTO } from 'src/app/model/request/CadastrarUsuarioDTO';
import { AutenticarService } from 'src/app/service/autenticar/autenticar.service';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private autenticarService: AutenticarService
    ) {}
  
  formularioCadastro = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.minLength(6)]],
    senha: ['',  [Validators.required, Validators.minLength(8)]] ,
    confirmarSenha: ['',  [Validators.required, Validators.minLength(8)]] ,
    telefone: ['',  [Validators.required, Validators.minLength(6)]],
  })
  bordaVermelhaEmail: boolean = false;
  bordaVermelhaSenha: boolean = false;
  
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

  realizarCadastro(): any {

    var cadastroUsuario : CadastroUsuarioDTO = {
      nome: this.formularioCadastro?.value?.nome!,
      telefone: this.formularioCadastro?.value?.telefone!, 
      email: this.formularioCadastro?.value?.email!,
      senha: this.formularioCadastro?.value?.senha!,
      confirmarSenha: this.formularioCadastro?.value?.confirmarSenha!,

    }
    alert(cadastroUsuario.nome);

    if(true == true)
    {
      var test = this.localStorageService.set('usuario', JSON.stringify(cadastroUsuario));
      this.autenticarService.registrar(cadastroUsuario)
      .subscribe(resultado => this.sucessoSubmeter(), error => this.falhouSubmeter(error));
      alert("Usuario logado com sucesso !")
    }
    }
    falhouSubmeter(error: any): void {
      alert("ERR"+error+ JSON.parse(error).toString()
      + JSON.stringify(error).toString());
    }
    sucessoSubmeter(): void {
      alert("OK");
    }

    verificarSenhas() : boolean
    {
      const confirmarSenha = this.formularioCadastro.value.senha;
      const senha = this.formularioCadastro.value.confirmarSenha;

      if (senha === confirmarSenha) {
        this.bordaVermelhaSenha = false;
        return true; 
      } else {
        this.bordaVermelhaSenha = true;
        this.formularioCadastro.setErrors({ senhasDiferentes: true });
        return  false ; 
      }
    }

    verificarEmail() : boolean
    {
      const email = this.formularioCadastro.value?.email;

      if (email?.includes("@")) {
        this.bordaVermelhaEmail = false;
        return true; 
      } else {
        this.bordaVermelhaEmail = true;
        return  false ; 
      }
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
  }

}
