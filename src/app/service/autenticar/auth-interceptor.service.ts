import { Injectable } from '@angular/core';
import { AutenticarService } from './autenticar.service';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { LocalStorageUtils } from '../local-storage/LocalStorageUtils';
import { Sessao } from 'src/app/model/sessao';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {
  public LocalStorage = new LocalStorageUtils();
  public TokenJwt : LocalStorageService = new LocalStorageService();

  constructor(
    private authService: AutenticarService,
      )
      {
      }

  intercept(req: HttpRequest<any>, next: HttpHandler, jwt : string): Observable<HttpEvent<any>> {
    var identidade : any = localStorage!.getItem('identidade.informacoes');
    var tokenJWT : Sessao ;
    if(identidade != null && identidade != undefined)
    {
      tokenJWT = JSON.parse(identidade);
    }else{
      tokenJWT = {
        nome: "",
        email: "",
        confirmarsenha: "",
        senha: "",
        telefone: "",
        jwt : {
            autenticado: false,
            expiracao: "",
            mensagem: "",
            token: "",
            usuario: "",
        }
    }
    }
    //var tokenJWT : any = this.LocalStorage.getLocalStorageJWT();

    const token = tokenJWT.jwt.token;
    console.log("intercep : "+token);



    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
