export interface CadastroProjetoModel {
    projetoId: "",
    titulo: string;
    objetivo: string;
    descricao: string;
    foto: string;
    valor: number;
    link: string;
    usuarioId: string;
    jwt: {
      autenticado: boolean;
      expiracao: string;
      token: string;
      mensagem: string;
      usuario: string;
    };
  }
