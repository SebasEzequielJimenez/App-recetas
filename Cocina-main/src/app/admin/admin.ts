import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent implements OnInit {

  recetas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.http.get<any[]>('http://localhost:3000/recetas')
      .subscribe(r => this.recetas = r || []);
  }

  toggleEstado(receta: any) {
    const nuevoEstado = receta.estado === 'aprobada' ? 'pendiente' : 'aprobada';
    const update = { ...receta, estado: nuevoEstado };

    this.http.put(`http://localhost:3000/recetas/${receta.id}`, update)
      .subscribe(() => this.load());
  }
}
