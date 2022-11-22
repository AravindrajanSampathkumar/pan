import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
