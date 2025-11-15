import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from '../../auth/login';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private auth: Login, private router: Router) {}

  ingresar() {
    this.auth.login(this.email, this.password).subscribe(u => {
      if (u) this.router.navigate(['/']);
      else alert('Usuario o contraseña inválidos');
    });
  }
}
/// esto se repite en auth