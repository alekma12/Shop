import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './standalone/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './standalone/register/register.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
