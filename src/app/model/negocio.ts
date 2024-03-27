import { JWT } from "./request/CadastroProjetoModel";

export interface Negocio {
    negocioId: string;
    nome: string;
    setor: string;
    descricao: string;
    link:string;
    criacao: Date;
    usuarioId: string;
    jwt: JWT;
  }
  