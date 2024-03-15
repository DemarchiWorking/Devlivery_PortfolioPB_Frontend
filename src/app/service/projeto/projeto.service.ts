import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private apiUrl = 'https://localhost:7073/api'; // URL da sua API

  constructor(private http: HttpClient) { }

  cadastrarProjeto(projeto: any) {
    return this.http.post(`${this.apiUrl}/projeto/cadastrar-projeto`, projeto);
  }
}