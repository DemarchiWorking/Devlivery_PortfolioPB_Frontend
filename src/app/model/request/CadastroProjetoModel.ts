import { JWT } from "../jwt";

export interface CadastroProjetoModel {
    projetoId: "",
    titulo: string;
    objetivo: string;
    descricao: string;
    foto: string;
    valor: number;
    link: string;
    usuarioId: string;
    jwt: JWT
  }
