import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';
import { AngularMaterialModule } from '../angular-material.module';
import { NewUserComponent } from '../new-user/new-user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DialogPopupComponent,
    NewUserComponent
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
