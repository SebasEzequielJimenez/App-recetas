import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
  nombre = '';
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  registrar() {
    const u: Usuario = { nombre: this.nombre, email: this.email, password: this.password };
    this.auth.register(u).subscribe(() => this.router.navigate(['/']));
  }
}
