import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './service/AuthGuard.service';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuardService]
  },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule), canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
