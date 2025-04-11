import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: {name: string, password: string} = {
    name: '',
    password: ''
  }; 
  save_login(){
    sessionStorage.setItem('login', JSON.stringify(this.login));
    sessionStorage.getItem('login');
    let login = JSON.parse(sessionStorage.getItem('login') || '{}');
    console.log(login);
  } 
}
