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
        { path: 'fixed-expenses', component: FixedExpensesComponent, canActivate: [AuthRouterService]},
        { path: 'fixed-incomes', component: FixedIncomesComponent, canActivate: [AuthRouterService]}
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
