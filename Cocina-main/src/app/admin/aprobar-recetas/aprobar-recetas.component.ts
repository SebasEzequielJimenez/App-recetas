import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../../services/receta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aprobar-recetas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Aprobar recetas</h2>
      <div *ngFor="let r of recetas">
        <h4>{{ r.titulo }} - Estado: {{ r.estado }}</h4>
        <button (click)="cambiarEstado(r,'aprobada')">Aprobar</button>
        <button (click)="cambiarEstado(r,'rechazada')">Rechazar</button>
      </div>
    </div>
  `
})
export class AprobarRecetasComponent implements OnInit {
  recetas: any[] = [];
  constructor(private recetaSvc: RecetaService) {}
  ngOnInit(){ this.recetaSvc.getRecetas().subscribe(r => this.recetas = r); }
  cambiarEstado(r: any, estado: string){
    this.recetaSvc.editar(r.id, {...r, estado}).subscribe(()=> this.recetaSvc.getRecetas().subscribe(x => this.recetas = x));
  }
}
