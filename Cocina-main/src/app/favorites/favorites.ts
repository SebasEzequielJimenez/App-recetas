import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'favorites',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class Favorites implements OnInit {
  favorites: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/favorites').subscribe(f => this.favorites = f || []);
  }
}


/*
import { Component, OnInit } from '@angular/core';
import { CommonModule, ControlFlow } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'favorites',
  imports: [CommonModule, ControlFlow, HttpClientModule],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class Favorites implements OnInit {
  favorites: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/favorites')
      .subscribe(f => this.favorites = f || []);
  }
}
*/