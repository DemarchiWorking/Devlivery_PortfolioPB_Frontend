import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { LocalStorageUtils } from '../local-storage/LocalStorageUtils';
import { CadastroProjetoModel, JWT } from 'src/app/model/request/CadastroProjetoModel';
import { SessaoUsuario } from 'src/app/model/sessao';
import { AutenticarService } from '../autenticar/autenticar.service';
import { Projeto } from 'src/app/model/projeto';

@Injectable({
  providedIn: 'root'
})  


export class ProjetoService {
  private apiUrl = 'https://localhost:44301/api'; 
  private tokenJWT = "";

  public LocalStorage = new LocalStorageUtils();
  constructor(
    private http: HttpClient,
    private autenticarService: AutenticarService) {
     }

  cadastrarProjeto(projeto: any) : Observable<any> {
    this.tokenJWT = this.autenticarService.parseAnyInToken(projeto);
    
    var usuarioLogado = this.LocalStorage.obtenTokenUsuario();
    //alert("test "+ JSON.stringify(projeto))

    var jwtReq : JWT = 
    {
      autenticado: projeto?.jwt?.jwt!.autenticado,
      expiracao: projeto?.jwt?.jwt!.expiracao,
      mensagem: projeto?.jwt?.jwt!.mensagem,
      token: projeto?.jwt?.jwt!.token,
      usuario: projeto?.jwt?.jwt!.usuario
    };
    var projetoReq : CadastroProjetoModel = 
    {
      projetoId: "",
      titulo: projeto.titulo,
      objetivo: projeto.objetivo,
      descricao: projeto.descricao,
      foto: projeto.foto,
      jwt: jwtReq,
      link: projeto.link,
      usuarioId : projeto.usuarioId,
      valor: projeto.valor
    }
    //alert("entrou"+ projeto.titulo+ "====="+`${this.apiUrl}/projeto/cadastrar-projeto`);
    var headers = new HttpHeaders().set('Authorization', this.tokenJWT);//projeto.jwt
    return this.http.post<any>(this.apiUrl+"/projeto/cadastrar-projeto", projetoReq ,  { headers }).pipe(first());
  }

  obterProjetos(token: string) : Observable<any> {

    //this.tokenJWT = this.autenticarService.parseAnyInToken(projeto);
    //alert(this.tokenJWT)
    //this.tokenJWT = this.autenticarService.parseAnyInTokenNN(projeto);
    
    console.log("asdasdasd ---"+ token)

    //var tokenJWT = this.autenticarService.parseAnyInToken(projeto);
    var headers = new HttpHeaders().set('Authorization', token.toString());//projeto.jwt
    return this.http.get<Projeto>(this.apiUrl+"/projeto/obter-catalogo-projetos", { headers }).pipe(first());
    //return null;
  }

    //var headers = new HttpHeaders().set('Authorization', ``); //Bearer ${token}
    //return this.http.post<any>(`${this.apiUrl}/api/projeto/cadastrar-projeto`, projeto ,  { headers }).pipe(first());
    // return this.http.post(this.apiUrl + "/projeto/cadastrar-projeto", projeto);

}