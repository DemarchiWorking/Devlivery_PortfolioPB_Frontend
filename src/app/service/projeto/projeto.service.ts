import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { LocalStorageUtils } from '../local-storage/LocalStorageUtils';
import { CadastroProjetoModel } from 'src/app/model/request/CadastroProjetoModel';
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

    alert("re+" + tokenJWT)
    //alert("entrou"+ projeto.titulo+ "====="+`${this.apiUrl}/projeto/cadastrar-projeto`);
    var headers = new HttpHeaders().set('Authorization', tokenJWT);//projeto.jwt
    return this.http.post<any>(this.apiUrl+"/projeto/cadastrar-projeto", projeto ,  { headers }).pipe(first());
  }

    //var headers = new HttpHeaders().set('Authorization', ``); //Bearer ${token}
    //return this.http.post<any>(`${this.apiUrl}/api/projeto/cadastrar-projeto`, projeto ,  { headers }).pipe(first());
    // return this.http.post(this.apiUrl + "/projeto/cadastrar-projeto", projeto);

}