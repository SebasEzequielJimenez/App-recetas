import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService, Usuario } from '../../services/usuario.service';
import { RecetaService, Receta } from '../../services/receta.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-perfil-publico',
  templateUrl: './perfil-publico.component.html'
})


export class UsuarioPerfilPublicoComponent implements OnInit {

  usuario?: Usuario;
  recetas: Receta[] = [];

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private recetaService: RecetaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuarioService.getUsuarioById(id).subscribe(u => {
      this.usuario = u;
    });

    this.recetaService.getRecetasByUsuarioId(id).subscribe(r => {
      this.recetas = r.filter(r => r.estado === 'aprobada');
    });
  }
}

@NgModule({
  declarations: [UsuarioPerfilPublicoComponent],
  imports:[
    CommonModule,
    RouterModule
  ]
})
export class UsuarioPerfilPublicoModule {}