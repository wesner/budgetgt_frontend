import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* CDK Layout Media Query */
import { LayoutModule } from '@angular/cdk/layout';

/** Services */
import { HttpService } from './services/http-service/http-service.service';
import { AuthRouterService } from './router/auth-router.service';
import { IsLoginService } from './router/is-login.service';
import { Ng2IziToastModule } from 'ng2-izitoast';

/** Directives */
import { disabledcontroldirective } from './utilities/disabled-control.directive';

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
import { ProfileComponent } from './mod-security/profile/profile.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { ChangePasswordComponent } from './mod-security/change-password/change-password.component';
import { DeleteAccountComponent } from './mod-security/delete-account/delete-account.component';
import { AlertComponent } from './components/alert/alert.component';
import { AccountsComponent } from './mod-catalogs/accounts/accounts.component';
import { FixedIncomesComponent } from './mod-catalogs/fixed-incomes/fixed-incomes.component';
import { FixedExpensesComponent } from './mod-catalogs/fixed-expenses/fixed-expenses.component';
import { CategoriesComponent } from './mod-catalogs/categories/categories.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ModalNewComponent } from './mod-catalogs/accounts/modal-new/modal-new.component';
import { ConfirmationDeleteComponent } from './components/confirmation-delete/confirmation-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    disabledcontroldirective,
    LoginComponent,
    MainComponent,
    DashboardComponent,
    RegisterComponent,
    FormValidationComponent,
    ResetPasswordComponent,
    ProfileComponent,
    SectionHeadingComponent,
    ChangePasswordComponent,
    DeleteAccountComponent,
    AlertComponent,
    AccountsComponent,
    FixedIncomesComponent,
    FixedExpensesComponent,
    CategoriesComponent,
    DataTableComponent,
    ModalNewComponent,
    ConfirmationDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    Ng2IziToastModule
  ],
  providers: [UtilService, HttpService, AuthRouterService, IsLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
