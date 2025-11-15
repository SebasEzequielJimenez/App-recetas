import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { RecetaService } from '../../../services/receta.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {
  misRecetas: any[] = [];
  user = this.auth.currentUser;

  constructor(private auth: AuthService, private recetaSvc: RecetaService) {}

  ngOnInit(): void {
    if (this.user) {
      this.recetaSvc.listarPorUsuario(this.user.id!).subscribe(r => this.misRecetas = r);
    }
  }
}
