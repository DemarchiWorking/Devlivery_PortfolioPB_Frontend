import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormRegisterComponent } from './pages/register/form-register/form-register.component';
import { FormRegisterProfileComponent } from './pages/register/form-register-profile/form-register-profile.component';
import { FormLoginComponent } from './pages/login/form-login/form-login.component';
import { FormRecoveryComponent } from './pages/login/form-recovery/form-recovery.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
//import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
//import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './components/title/title.component';
//import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { BotaoToggleMenuComponent } from './components/botao-toggle-menu/botao-toggle-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent,
    FormRegisterProfileComponent,
    FormLoginComponent,
    FormRecoveryComponent,
    ThemeToggleComponent,
    TitleComponent,
    MenuPrincipalComponent,
    BotaoToggleMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    //MatTableModule,HttpClientModule,MatFormFieldModule,MatSelectModule,AppMaterialModule,
    //MatButtonModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
