export interface Sessao {
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    confirmarsenha: string;
    jwt: {
      autenticado: boolean;
      expiracao: string;
      token: string;
      mensagem: string;
      usuario: string;
    };
  }

  export interface SessaoUsuario {
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    jwt: Jwt;
  }

  interface Jwt {
    autenticado: boolean;
    expiracao: string;
    token: string;
    mensagem: string;
    usuario: string;
  }