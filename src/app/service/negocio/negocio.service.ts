import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutenticarService } from '../autenticar/autenticar.service';
import { LocalStorageUtils } from '../local-storage/LocalStorageUtils';
import { Observable, first } from 'rxjs';
import { JWT } from 'src/app/model/request/CadastroProjetoModel';
import { CadastroNegocioDTO } from 'src/app/model/request/CadastroNegocioDTO';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {
  private apiUrl = 'https://localhost:44301/api'; 
  private tokenJWT = "";

  public LocalStorage = new LocalStorageUtils();
  
  constructor(private http: HttpClient,
    private autenticarService: AutenticarService) 
    {
      
    }

    obterProjetos(token: string) : Observable<any> {
      
      console.log("asdasdasd ---"+ token)
      var headers = new HttpHeaders().set('Authorization', token.toString());//projeto.jwt
      return this.http.get<any>(this.apiUrl+"/negocio/obter-catalogo-negocios", { headers }).pipe(first());

    }
    cadastrarNegocio(negocio: any) : Observable<any> {
      this.tokenJWT = this.autenticarService.parseAnyInToken(negocio);
      
      var usuarioLogado = this.LocalStorage.obtenTokenUsuario();
      //alert("test "+ JSON.stringify(projeto))
  
      var jwtReq : JWT = 
      {
        autenticado: negocio?.jwt?.jwt!.autenticado,
        expiracao: negocio?.jwt?.jwt!.expiracao,
        mensagem: negocio?.jwt?.jwt!.mensagem,
        token: negocio?.jwt?.jwt!.token,
        usuario: negocio?.jwt?.jwt!.usuario
      };
      var negocioReq : CadastroNegocioDTO = 
      {
        negocioId: "",
        nome: negocio.nome,
        setor: negocio.setor,
        descricao: negocio.descricao,
        criacao: new Date(),
        jwt: jwtReq,
        link: negocio.link,
        usuarioId : negocio.usuarioId,
      }
      
      var headers = new HttpHeaders().set('Authorization', this.tokenJWT);//projeto.jwt
      return this.http.post<any>(this.apiUrl+"/negocio/cadastrar-negocio", negocioReq ,  { headers }).pipe(first());
    }
  
   
}
