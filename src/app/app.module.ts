import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* CDK Layout Media Query */
import { LayoutModule } from '@angular/cdk/layout';

/** Services */
import { HttpService } from './services/http-service/http-service.service';

/* Componentes */
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './mod-security/login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './mod-dashboard/dashboard/dashboard.component';
import { RegisterComponent } from './mod-security/register/register.component';
import { FormValidationComponent } from './utilities/message-error/form-validation/form-validation.component';
import { UtilService } from './utilities/util.service';
import { ResetPasswordComponent } from './mod-security/reset-password/reset-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DashboardComponent,
    RegisterComponent,
    FormValidationComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UtilService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
