import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
//import { CadastroProjetoModel } from 'src/app/model/request/CadastroProjetoModel';

@Injectable({
  providedIn: 'root'
})  


export class ProjetoService {
  private apiUrl = 'https://localhost:44301/api'; 

  constructor(private http: HttpClient) { }

  cadastrarProjeto(projeto: any) : Observable<any> {
    alert("entrou"+ projeto.titulo+ "====="+`${this.apiUrl}/projeto/cadastrar-projeto`);
    

    var headers = new HttpHeaders().set('Authorization', '');
    return this.http.post<any>(this.apiUrl+"/projeto/cadastrar-projeto", projeto ,  { headers }).pipe(first());
  }

    
    //var headers = new HttpHeaders().set('Authorization', ``); //Bearer ${token}
    //return this.http.post<any>(`${this.apiUrl}/api/projeto/cadastrar-projeto`, projeto ,  { headers }).pipe(first());
   // return this.http.post(this.apiUrl + "/projeto/cadastrar-projeto", projeto);

}