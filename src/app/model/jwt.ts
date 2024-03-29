export interface JWT {
  autenticado: boolean;
  expiracao: string;
  token: string;
  mensagem: string;
  usuario: string;
};
