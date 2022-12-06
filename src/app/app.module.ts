import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { FormatTimePipe } from './pipes/formatTime.pipe';
import { AngularMaterialModule } from './angular-material.module';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [	
    AppComponent,
    FormatTimePipe,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,    
    HttpClientModule 
  ],
  exports:[],
  providers: [FormatTimePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
