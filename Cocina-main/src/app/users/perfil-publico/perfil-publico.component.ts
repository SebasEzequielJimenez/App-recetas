import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../services/usuario.service';
import { RecetaService } from '../../../services/receta.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil-publico',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './perfil-publico.component.html'
})
export class PerfilPublicoComponent implements OnInit {
  user: any;
  recetas: any[] = [];

  constructor(private usuarioSvc: UsuarioService, private recetaSvc: RecetaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.usuarioSvc.getUsuario(id).subscribe(u => this.user = u);
      this.recetaSvc.listarPorUsuario(id).subscribe(r => this.recetas = r);
    }
  }
}
