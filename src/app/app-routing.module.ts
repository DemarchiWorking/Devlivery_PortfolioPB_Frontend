import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './pages/register/form-register/form-register.component';
import { FormLoginComponent } from './pages/login/form-login/form-login.component';
import { CadastroProjetoComponent } from './pages/portfolio/cadastro-projeto/cadastro-projeto.component';
import { CatalogoComponent } from './pages/portfolio/catalogo/catalogo.component';
import { NegocioComponent } from './pages/negocio/negocio/negocio.component';
import { NetworkingComponent } from './pages/networking/networking/networking.component';
import { AmizadeComponent } from './pages/networking/amizade/amizade.component';
import { PaginaInicialComponent } from './pages/inicio/pagina-inicial/pagina-inicial.component';
import { EntrarComponent } from './pages/inicio/entrar/entrar.component';
import { RegistrarComponent } from './pages/inicio/registrar/registrar.component';
import { ListaNegociosComponent } from './pages/negocio/lista-negocios/lista-negocios.component';
import { NegocioDetalheComponent } from './pages/negocio/negocio-detalhe/negocio-detalhe.component';


const routes: Routes = [
  { path: '', component: PaginaInicialComponent},
  { path: 'inicio', component: PaginaInicialComponent},
  { path: 'cadastro', component: RegistrarComponent},
  { path: 'login', component: EntrarComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'negocio', component: NegocioComponent },
  { path: 'networking', component: NetworkingComponent },
  { path: 'networking/conexoes', component: AmizadeComponent },
  { path: 'negocio/lista', component: ListaNegociosComponent },
  { path: 'negocio/detalhe', component: NegocioDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
