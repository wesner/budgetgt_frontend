import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { GeneralComponent } from '../general/general.component';

const routes: Routes = [
  // { path: '', redirectTo: '/inicio/panel', pathMatch: 'full' },
  { path: '', redirectTo: 'ingreso', pathMatch: 'full' },
  { path: 'ingreso', component: LoginComponent },
  { path: 'inicio', component: MainComponent, children:[
    { path: 'panel', component: GeneralComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
