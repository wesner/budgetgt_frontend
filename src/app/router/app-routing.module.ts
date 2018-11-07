import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from '../mod-dashboard/dashboard/dashboard.component';
import { MainComponent } from '../main/main.component';
import { LoginComponent } from '../mod-security/login/login.component';
import { RegisterComponent } from '../mod-security/register/register.component';
import { ResetPasswordComponent } from '../mod-security/reset-password/reset-password.component';
import { AuthRouterService } from './auth-router.service';
import { IsLoginService } from './is-login.service';
import { ProfileComponent } from '../mod-security/profile/profile.component';
import { ChangePasswordComponent } from '../mod-security/change-password/change-password.component';
import { DeleteAccountComponent } from '../mod-security/delete-account/delete-account.component';
import { AccountsComponent } from '../mod-catalogs/accounts/accounts.component';
import { CategoriesComponent } from '../mod-catalogs/categories/categories.component';
import { FixedExpensesComponent } from '../mod-catalogs/fixed-expenses/fixed-expenses.component';
import { FixedIncomesComponent } from '../mod-catalogs/fixed-incomes/fixed-incomes.component';
import { DetailsFiComponent } from '../mod-catalogs/fixed-incomes/details-fi/details-fi.component';
import { FormFiComponent } from '../mod-catalogs/fixed-incomes/form-fi/form-fi.component';
import { ListFIComponent } from '../mod-catalogs/fixed-incomes/list-fi/list-fi.component';
import { ListFeComponent } from '../mod-catalogs/fixed-expenses/list-fe/list-fe.component';
import { FormFeComponent } from '../mod-catalogs/fixed-expenses/form-fe/form-fe.component';
import { DetailsFeComponent } from '../mod-catalogs/fixed-expenses/details-fe/details-fe.component';
import { MainCCComponent } from '../mod-credit-card/main-cc/main-cc.component';
import { ListCCComponent } from '../mod-credit-card/list-cc/list-cc.component';
import { FormCCComponent } from '../mod-credit-card/form-cc/form-cc.component';
import { DetailsCCComponent } from '../mod-credit-card/details-cc/details-cc.component';
import { PaymentHistoryCCComponent } from '../mod-credit-card/payment-history/payment-history.component';
import { NewPaymentCCComponent } from '../mod-credit-card/new-payment/new-payment.component';
import { MainDBTComponent } from '../mod-debts/main-dbt/main-dbt.component';
import { ListDBTComponent } from '../mod-debts/list-dbt/list-dbt.component';
import { FormDBTComponent } from '../mod-debts/form-dbt/form-dbt.component';
import { DetailsDBTComponent } from '../mod-debts/details-dbt/details-dbt.component';
import { HistoryPaymentDBTComponent } from '../mod-debts/history-payment-dbt/history-payment-dbt.component';
import { NewPaymentDBTComponent } from '../mod-debts/new-payment-dbt/new-payment-dbt.component';
import { MainBudComponent } from '../mod-budget/main-bud/main-bud.component';
import { BalanceComponent } from '../mod-budget/balance/balance.component';
import { FormIncomeComponent } from '../mod-budget/form-income/form-income.component';
import { FormExpenseComponent } from '../mod-budget/form-expense/form-expense.component';
import { ListIncomesComponent } from '../mod-budget/list-incomes/list-incomes.component';
import { HistoryIncomesComponent } from '../mod-budget/history-incomes/history-incomes.component';
import { ListExpensesComponent } from '../mod-budget/list-expenses/list-expenses.component';
import { HistoryExpensesComponent } from '../mod-budget/history-expenses/history-expenses.component';

const routes: Routes = [
  // { path: '**', component: PageNotFoundComponent }
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', canActivate: [IsLoginService], component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthRouterService], children:[
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'account', children:[
          { path: 'profile', component: ProfileComponent, canActivate: [AuthRouterService]},
          { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthRouterService]},
          { path: 'delete-account', component: DeleteAccountComponent, canActivate: [AuthRouterService]},
      ]},
      { path: 'catalogs', children:[
        { path: 'accounts', component: AccountsComponent, canActivate: [AuthRouterService]},
        { path: 'categories', component: CategoriesComponent, canActivate: [AuthRouterService]},
        { path: 'fixed-incomes', component: FixedIncomesComponent, canActivate: [AuthRouterService], children:[
          { path: 'list', component: ListFIComponent, canActivate: [AuthRouterService]},
          { path: 'new', component: FormFiComponent, canActivate: [AuthRouterService]},
          { path: 'edit/:id', component: FormFiComponent, canActivate: [AuthRouterService]},
          { path: 'details/:id', component: DetailsFiComponent, canActivate: [AuthRouterService]}
        ]},
        { path: 'fixed-expenses', component: FixedExpensesComponent, canActivate: [AuthRouterService], children:[
          { path: 'list', component: ListFeComponent, canActivate: [AuthRouterService]},
          { path: 'new', component: FormFeComponent, canActivate: [AuthRouterService]},
          { path: 'edit/:id', component: FormFeComponent, canActivate: [AuthRouterService]},
          { path: 'details/:id', component: DetailsFeComponent, canActivate: [AuthRouterService]}          
        ]},
      ]},
      { path: 'credit-cards', component: MainCCComponent, canActivate: [AuthRouterService], children:[
        { path: 'list', component: ListCCComponent, canActivate: [AuthRouterService]},
        { path: 'new', component: FormCCComponent, canActivate: [AuthRouterService]},
        { path: 'edit/:id', component: FormCCComponent, canActivate: [AuthRouterService]},
        { path: 'details/:id', component: DetailsCCComponent, canActivate: [AuthRouterService]},
        { path: 'payment-history', component: PaymentHistoryCCComponent, canActivate: [AuthRouterService]},
        { path: 'payment-new', component: NewPaymentCCComponent, canActivate: [AuthRouterService]}
      ]},
      { path: 'debts', component: MainDBTComponent, canActivate: [AuthRouterService], children:[
        { path: 'list', component: ListDBTComponent, canActivate: [AuthRouterService]},
        { path: 'new', component: FormDBTComponent, canActivate: [AuthRouterService]},
        { path: 'edit/:id', component: FormDBTComponent, canActivate: [AuthRouterService]},
        { path: 'details/:id', component: DetailsDBTComponent, canActivate: [AuthRouterService]},
        { path: 'payment-history', component: HistoryPaymentDBTComponent, canActivate: [AuthRouterService]},
        { path: 'payment-new', component: NewPaymentDBTComponent, canActivate: [AuthRouterService]}
      ]},
      { path: 'budget', component: MainBudComponent, canActivate: [AuthRouterService], children:[
        { path: 'balance', component: BalanceComponent, canActivate: [AuthRouterService]},
        { path: 'new-income', component: FormIncomeComponent, canActivate: [AuthRouterService]},
        { path: 'edit-income/:id', component: FormIncomeComponent, canActivate: [AuthRouterService]},
        { path: 'list-incomes', component: ListIncomesComponent, canActivate: [AuthRouterService]},
        { path: 'history-incomes', component: HistoryIncomesComponent, canActivate: [AuthRouterService]},
        { path: 'new-expense', component: FormExpenseComponent, canActivate: [AuthRouterService]},
        { path: 'edit-expense/:id', component: FormExpenseComponent, canActivate: [AuthRouterService]},
        { path: 'list-expenses', component: ListExpensesComponent, canActivate: [AuthRouterService]},
        { path: 'history-expenses', component: HistoryExpensesComponent, canActivate: [AuthRouterService]},
      ]},
      { path: '**', redirectTo: 'dashboard' }
  ]},
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
