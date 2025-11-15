import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username = '';
  password = '';

  constructor(private router: Router) {}

  submit() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    this.router.navigate(['/']);
  }
}



























/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username = '';
  password = '';
  constructor(private router: Router) {}
  submit() {
    this.router.navigate(['/']);
  }
}
*/
