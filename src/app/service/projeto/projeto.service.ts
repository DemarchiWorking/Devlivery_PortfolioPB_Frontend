import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { LocalStorageUtils } from '../local-storage/LocalStorageUtils';
import { CadastroProjetoModel, JWT } from 'src/app/model/request/CadastroProjetoModel';
import { SessaoUsuario } from 'src/app/model/sessao';

@Injectable({
  providedIn: 'root'
})  


export class ProjetoService {
  private apiUrl = 'https://localhost:44301/api'; 

  public LocalStorage = new LocalStorageUtils();
  constructor(private http: HttpClient) { }

  cadastrarProjeto(projeto: any) : Observable<any> {

    var tokenJWT = JSON.stringify(projeto.jwt.jwt.token)

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
    alert("aqzz-"+ jwtReq);
    alert("aqzz-"+ projetoReq);
    alert("aqzz-"+ projetoReq.titulo);
    //alert("entrou"+ projeto.titulo+ "====="+`${this.apiUrl}/projeto/cadastrar-projeto`);
    var headers = new HttpHeaders().set('Authorization', tokenJWT);//projeto.jwt
    return this.http.post<any>(this.apiUrl+"/projeto/cadastrar-projeto", projetoReq ,  { headers }).pipe(first());
  }

    //var headers = new HttpHeaders().set('Authorization', ``); //Bearer ${token}
    //return this.http.post<any>(`${this.apiUrl}/api/projeto/cadastrar-projeto`, projeto ,  { headers }).pipe(first());
    // return this.http.post(this.apiUrl + "/projeto/cadastrar-projeto", projeto);

}