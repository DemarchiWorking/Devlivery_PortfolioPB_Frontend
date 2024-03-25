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
  constructor(
    private authService: AutenticarService,
      ) { }
   
  intercept(req: HttpRequest<any>, next: HttpHandler, jwt : string): Observable<HttpEvent<any>> {
    var identidade : any = localStorage!.getItem('identidade.informacoes');
    var tokenJWT : Sessao = JSON.parse(identidade);
    //var tokenJWT : any = this.LocalStorage.getLocalStorageJWT();

    const token = tokenJWT.jwt.token;




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
