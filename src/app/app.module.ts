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
import { readonlycontroldirective } from './utilities/readonly-control.directive';

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
import { DataModalComponent } from './mod-catalogs/categories/data-modal/data-modal.component';
import { FormFeComponent } from './mod-catalogs/fixed-expenses/form-fe/form-fe.component';
import { FormFiComponent } from './mod-catalogs/fixed-incomes/form-fi/form-fi.component';
import { DetailsFiComponent } from './mod-catalogs/fixed-incomes/details-fi/details-fi.component';
import { MessageEmptyComponent } from './components/message-empty/message-empty.component';
import { ListFIComponent } from './mod-catalogs/fixed-incomes/list-fi/list-fi.component';
import { ListFeComponent } from './mod-catalogs/fixed-expenses/list-fe/list-fe.component';
import { DetailsFeComponent } from './mod-catalogs/fixed-expenses/details-fe/details-fe.component';
import { ListCCComponent } from './mod-credit-card/list-cc/list-cc.component';
import { FormCCComponent } from './mod-credit-card/form-cc/form-cc.component';
import { DetailsCCComponent } from './mod-credit-card/details-cc/details-cc.component';
import { MainCCComponent } from './mod-credit-card/main-cc/main-cc.component';
import { PaymentHistoryCCComponent } from './mod-credit-card/payment-history/payment-history.component';
import { NewPaymentCCComponent } from './mod-credit-card/new-payment/new-payment.component';
import { ListDBTComponent } from './mod-debts/list-dbt/list-dbt.component';
import { FormDBTComponent } from './mod-debts/form-dbt/form-dbt.component';
import { MainDBTComponent } from './mod-debts/main-dbt/main-dbt.component';
import { NewPaymentDBTComponent } from './mod-debts/new-payment-dbt/new-payment-dbt.component';
import { HistoryPaymentDBTComponent } from './mod-debts/history-payment-dbt/history-payment-dbt.component';
import { DetailsDBTComponent } from './mod-debts/details-dbt/details-dbt.component';
import { BalanceComponent } from './mod-budget/balance/balance.component';
import { MainBudComponent } from './mod-budget/main-bud/main-bud.component';
import { FormIncomeComponent } from './mod-budget/form-income/form-income.component';
import { FormExpenseComponent } from './mod-budget/form-expense/form-expense.component';
import { DetailsIncomeComponent } from './mod-budget/details-income/details-income.component';
import { DetailsExpenseComponent } from './mod-budget/details-expense/details-expense.component';
import { ListExpensesComponent } from './mod-budget/list-expenses/list-expenses.component';
import { ListIncomesComponent } from './mod-budget/list-incomes/list-incomes.component';
import { HistoryExpensesComponent } from './mod-budget/history-expenses/history-expenses.component';
import { HistoryIncomesComponent } from './mod-budget/history-incomes/history-incomes.component';



@NgModule({
  declarations: [
    AppComponent,
    disabledcontroldirective,
    readonlycontroldirective,
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
    DataModalComponent,
    FormFeComponent,
    FormFiComponent,
    DetailsFiComponent,
    MessageEmptyComponent,
    ListFIComponent,
    ListFeComponent,
    DetailsFeComponent,
    ListCCComponent,
    FormCCComponent,
    DetailsCCComponent,
    MainCCComponent,
    PaymentHistoryCCComponent,
    NewPaymentCCComponent,
    ListDBTComponent,
    FormDBTComponent,
    MainDBTComponent,
    NewPaymentDBTComponent,
    HistoryPaymentDBTComponent,
    DetailsDBTComponent,
    BalanceComponent,
    MainBudComponent,
    FormIncomeComponent,
    FormExpenseComponent,
    DetailsIncomeComponent,
    DetailsExpenseComponent,
    ListExpensesComponent,
    ListIncomesComponent,
    HistoryExpensesComponent,
    HistoryIncomesComponent
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
