import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusEnum } from 'src/app/model/enum/StatusEnum';
import { CadastroUsuarioDTO } from 'src/app/model/request/CadastrarUsuarioDTO';
import { Alerta } from 'src/app/model/response/alerta';
import { AutenticarService } from 'src/app/service/autenticar/autenticar.service';
import { ConfigStorageService } from 'src/app/service/config-storage/config-storage.service';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private autenticarService: AutenticarService,
    private  configStorageService : ConfigStorageService,
    ) {}
  
  formularioCadastro = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.minLength(6)]],
    senha: ['',  [Validators.required, Validators.minLength(6)]] ,
    confirmarSenha: ['',  [Validators.required, Validators.minLength(6)]] ,
    telefone: [''],
  })

  showAlert = false;
  alerta : Alerta = {
    titulo: "Carregando",
    texto: "...",
    tipoAlerta: StatusEnum.INICIO,
    dados: "",
    status: 0,
    mostrar: true
  }
/*
  var alerta : Alerta = { titulo : "", tipoAlerta: "", dados: "", status: 0, texto:""}
  
  //var alerta = this.setAlertaToast()
*/

  bordaVermelhaNome: boolean = false;
  bordaVermelhaEmail: boolean = false;
  bordaVermelhaSenha: boolean = false;
  bordaVermelhaConfirmarSenha: boolean = false;
  
  ngOnInit(): void {
    this.configStorageService.aplicarTema();
  }
  setAlertaToast(alerta : Alerta)
  {
    this.alerta.titulo = alerta.titulo;
    this.alerta.texto = alerta.texto;
    this.alerta.tipoAlerta = alerta.tipoAlerta;
    this.alerta.dados = alerta.dados;
    this.alerta.status = alerta.status;  
  }

  setUsuarioLogado() {
    var usuario : any = {
      login: "",
      senha: ""
     }
    console.log(usuario);

    //usuario: string
    //this.localStorageService.set('usuario', "usuario");
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
      jwt: ""
    }
    if (this.formularioCadastro.valid) {

      this.autenticarService.registrar(cadastroUsuario)
        .subscribe(resultado => this.sucessoSubmeter(resultado, cadastroUsuario), error => this.falhouSubmeter(error));

      }
      else{
        this.validarInputsCadastroSubmit();
        alert("Formulário inválido!")
      }
    }
    falhouSubmeter(error: any ): void {

      var alerta : Alerta = {
        titulo: error?.error.titulo.toString(),
        dados: "",
        status: 400,
        texto: error?.error!.dados,
        tipoAlerta: StatusEnum.ERRO,
        mostrar: true,
      }

      
      this.setAlertaToast(alerta);
      //this.alerta = this.setAlertaToast();
        // Exibir os dados em um alerta
      //\nDados: ${error?.dados.toString()}
      //alert(error!.titulo.toString())
      //alert(error!.titulo.toString())
      //alert("ERRO: "+ JSON.parse(error)?.titulo.toString()
      //+ JSON.stringify(error).toString());
      // this.errorMessage = error.error; // Cap
    }
    sucessoSubmeter(resultado: any, cadastro: CadastroUsuarioDTO): void {
      alert(JSON.stringify(resultado));
      var alerta : Alerta = {
        titulo: "Cadastro Usuario Sucesso",
        dados: resultado.usuario.toString(),
        status: 200,
        texto: 'Usuario Cadastrado com sucesso.',
        tipoAlerta: StatusEnum.SUCESSO,
        mostrar: true,
      }
      this.setAlertaToast(alerta);
      cadastro.jwt = JSON.stringify(resultado);
      this.configStorageService.LocalStorage.salvarInformacoesPerfil(JSON.stringify(cadastro));
        
      //private route: ActivatedRoute, 
      this.router.navigate(['networking']);
    }

    verificarSenhas() : boolean
    {
      const confirmarSenha = this.formularioCadastro.value.senha;
      const senha = this.formularioCadastro.value.confirmarSenha;

      if (senha === confirmarSenha) {
        this.bordaVermelhaConfirmarSenha = false;
        return true; 
      } else {
        this.bordaVermelhaConfirmarSenha = true;
        this.formularioCadastro.setErrors({ senhasDiferentes: true });
        return  false ; 
      }
    }
  getUsuarioLogado(): string | null {
    //var test = this.localStorageService.get('usuario');
    //alert(test);
    //return this.localStorageService.get('usuario');
    return null;
  }

  deslogarUsuario(): void {
  }

  validarInputsCadastroSubmit()
  {
    var inputNome = this.formularioCadastro.get('nome')?.value
    var inputEmail = this.formularioCadastro.get('email')?.value
    var inputSenha = this.formularioCadastro.get('senha')?.value
    //Nome
    if (inputNome!.length < 6) {
      this.bordaVermelhaNome = true;      
    } else {
      this.bordaVermelhaNome = false;
      this.formularioCadastro.setErrors({ nomeInvalido: true });

    }
    //Email
    if (inputEmail!.length < 6) {
      this.bordaVermelhaEmail = true;
    } else {
      this.bordaVermelhaEmail = false;
      this.formularioCadastro.setErrors({ emailInvalido: true });
    }
    //Senha
    if (inputSenha!.length < 6) {
      this.bordaVermelhaSenha = true;
    } else {
      this.bordaVermelhaSenha = false;
      this.formularioCadastro.setErrors({ senhaInvalido: true });
    }
    
  }
  verificarInputEmail()
  {
    const email = this.formularioCadastro.value?.email;
    if (email?.includes("@") && email.length > 5)
      {
          this.bordaVermelhaEmail = false;      
      }
     else {
      this.formularioCadastro.setErrors({ emailInvalido: true });
      this.bordaVermelhaEmail = true;
    }
  }
  verificarInputNome()
  {
    const email = this.formularioCadastro.value?.nome;

    if (email!.length > 5) {
      this.bordaVermelhaNome = false;
    }
  }
  verificarInputSenha()
  {
    const senha = this.formularioCadastro.value?.senha;
    if (senha!.length > 5) {
      this.bordaVermelhaSenha = false;
    }
  }
}
