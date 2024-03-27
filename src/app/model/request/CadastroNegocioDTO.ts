import { JWT } from "./CadastroProjetoModel";

export interface CadastroNegocioDTO {
    negocioId: string;
    nome: string;
    setor: string;
    descricao: string;
    link:string;
    criacao: Date;
    usuarioId: string;
    jwt: JWT;
  }    
