export interface CadastroProjetoModel {
    titulo: string;
    objetivo: string;
    descricao: string;
    foto: string;
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
