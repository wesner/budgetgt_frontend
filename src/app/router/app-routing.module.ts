import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../mod-dashboard/dashboard/dashboard.component';
import { MainComponent } from '../main/main.component';
import { LoginComponent } from '../mod-security/login/login.component';
import { RegisterComponent } from '../mod-security/register/register.component';
import { ResetPasswordComponent } from '../mod-security/reset-password/reset-password.component';

const routes: Routes = [
  // { path: '', redirectTo: '/inicio/panel', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'main', component: MainComponent, children:[
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: '**', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
