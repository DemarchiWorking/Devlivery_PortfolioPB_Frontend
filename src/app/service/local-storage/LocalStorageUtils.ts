import { ConfigureStorage } from "src/app/model/config-storage";

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
    /*
    public salvarTema(response: any) {
        this.salvarEmail(response.usuario);
    }*/
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

    public setarConfiguracoes(tema: string, idioma: string){

        var config = {
            'tema' : tema,
            'idioma' : idioma
        }
        localStorage.setItem('config', JSON.stringify(config))
    }

    public getConfiguracoes(){
        var configLocalStorage : any = localStorage!.getItem('config');

        var configuracao : ConfigureStorage | undefined =
        {
            'tema' : configLocalStorage!.tema,
            'idioma' : configLocalStorage!.idioma, 
        }
        return configuracao;
    }
}