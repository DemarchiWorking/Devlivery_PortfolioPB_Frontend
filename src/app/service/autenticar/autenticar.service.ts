import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  private apiUrl = 'https://localhost:44301/api'; 
  constructor(private http: HttpClient) { }

  login(loginModel: any) : Observable<any> {
    var headers = new HttpHeaders().set('Authorization', '');
    return this.http.post<any>(this.apiUrl+"/identidade/fazer-login", loginModel ,  { headers }).pipe(first());
  }
  
  registrar(usuarioModel: any) : Observable<any> {
    var headers = new HttpHeaders().set('Authorization', '');
    return this.http.post<any>(this.apiUrl+"/identidade/cadastrar-usuario", usuarioModel ,  { headers }).pipe(first());
  }

  parseAnyInToken(any : any){
    return JSON.stringify(any.jwt.jwt.token);
  }
    parseAnyInTokenNN(any : any){
    return JSON.stringify(any.jwt.jwt.token);
  }
}