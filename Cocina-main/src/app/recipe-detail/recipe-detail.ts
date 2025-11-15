import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'recipe-detail',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css']
})
export class RecipeDetail implements OnInit {
  recipe: any = null;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get('http://localhost:3000/recipes/' + id).subscribe(r => this.recipe = r);
    }
  }
}


/*
import { Component, OnInit } from '@angular/core';
import { CommonModule, ControlFlow } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'recipe-detail',
  imports: [CommonModule, ControlFlow, HttpClientModule],
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css']
})
export class RecipeDetail implements OnInit {
  recipe: any = null;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get('http://localhost:3000/recipes/' + id)
        .subscribe(r => this.recipe = r);
    }
  }
}
*/