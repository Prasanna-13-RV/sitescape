import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { Template1Component } from './pages/templates/template1/template1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    Template1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBfhJsxk41tBHh2Kx7CzGuLqAtWx4W6gWY",
      authDomain: "site-scape.firebaseapp.com",
      projectId: "site-scape",
      storageBucket: "site-scape.appspot.com",
      messagingSenderId: "390166786977",
      appId: "1:390166786977:web:a73ebc8ab945d7fd8051e0",
      measurementId: "G-ZDD6GERXFT"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
