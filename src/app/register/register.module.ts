import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AngularMaterialModule
  ]
})
export class RegisterModule { }
