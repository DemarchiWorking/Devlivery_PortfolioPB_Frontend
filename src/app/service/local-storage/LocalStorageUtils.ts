export class LocalStorageUtils {


    public obterUsuario(){
        return JSON.parse(localStorage.getItem('identidade.usuario')!);
    }

    public obtenTokenUsuario(): string {
        return localStorage.getItem('identidade.token')!;
    }

    public obtenInformacoesUsuario(): string {
        return localStorage.getItem('identidade.informacoes')!;
    }

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.token);
        this.salvarEmail(response.usuario);
    }

    public salvarInformacoesPerfil(request: any){
        localStorage.setItem('identidade.informacoes', request)
    }


    // logout
    public limparDadosLocaisUsuario(){
        localStorage.removeItem('identidade.token');
        localStorage.removeItem('identidade.usuario');
    }







    public salvarTokenUsuario(token: string){
        localStorage.setItem('identidade.token', token)
    }


    public salvarEmail(usuario: string){
        localStorage.setItem('identidade.usuario', JSON.stringify(usuario))
    }
}