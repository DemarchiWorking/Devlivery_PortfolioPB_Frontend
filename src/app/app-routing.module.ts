import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './pages/register/form-register/form-register.component';
import { FormLoginComponent } from './pages/login/form-login/form-login.component';


const routes: Routes = [
  { path: '', component: FormRegisterComponent},
  { path: 'login', component: FormRegisterComponent },
  { path: 'signup', component: FormLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
