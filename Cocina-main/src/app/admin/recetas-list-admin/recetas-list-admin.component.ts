import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../../services/receta.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recetas-admin-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h2>Recetas (admin)</h2>
      <div *ngFor="let r of recetas">
        <h4>{{ r.titulo }} <small>({{ r.estado }})</small></h4>
        <a [routerLink]="['/admin/aprobar']">Aprobar / Ver</a>
      </div>
    </div>
  `
})
export class RecetasAdminListComponent implements OnInit {
  recetas: any[] = [];
  constructor(private recetaSvc: RecetaService) {}
  ngOnInit(){ this.recetaSvc.getRecetas().subscribe(r => this.recetas = r); }
}
