import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'recipe-list',
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './recipe-list.html',
  styleUrls: ['./recipe-list.css']
})
export class RecipeList implements OnInit {
  recipes: any[] = [];
  filter = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPublicRecipes();
  }

  // Cargar solamente recetas públicas
  loadPublicRecipes() {
    // Endpoint sugerido: SOLO devuelve recetas aprobadas y sin datos sensibles
    this.http.get<any[]>('http://localhost:3000/public/recipes')
      .subscribe(r => this.recipes = r || []);
  }

  applyFilter(value: string) {
    this.filter = value.toLowerCase();
  }

  matches(r: any) {
    const title = (r.title || '').toLowerCase();
    return !this.filter || title.includes(this.filter);
  }
}
