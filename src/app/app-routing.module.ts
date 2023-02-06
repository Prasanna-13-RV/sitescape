import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { Template1Component } from './pages/templates/template1/template1.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "auth/login", component: LoginComponent },
  { path: "auth/register", component: RegisterComponent },
  { path: "templates/template1", component: Template1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
