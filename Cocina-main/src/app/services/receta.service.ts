import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Receta {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  tiempoCoccion: number;
  dificultad: string;
  estado: 'pendiente' | 'aprobada' | 'rechazada';
  usuarioId: number;
  fechaCreacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private apiUrl = 'http://localhost:3000/recetas';

  constructor(private http: HttpClient) {}

  getRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.apiUrl);
  }

  getRecetasAprobadas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(`${this.apiUrl}?estado=aprobada`);
  }

  getRecetasPendientes(): Observable<Receta[]> {
    return this.http.get<Receta[]>(`${this.apiUrl}?estado=pendiente`);
  }

  getRecetaById(id: number): Observable<Receta> {
    return this.http.get<Receta>(`${this.apiUrl}/${id}`);
  }

  getRecetasByUsuarioId(usuarioId: number): Observable<Receta[]> {
    return this.http.get<Receta[]>(`${this.apiUrl}?usuarioId=${usuarioId}`);
  }

  createReceta(receta: Receta): Observable<Receta> {
    return this.http.post<Receta>(this.apiUrl, receta);
  }

  updateReceta(receta: Receta): Observable<Receta> {
    return this.http.put<Receta>(`${this.apiUrl}/${receta.id}`, receta);
  }

  deleteReceta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
