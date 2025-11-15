
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';

@Component({
  standalone: true,
  selector: 'admin',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin implements OnInit {
  recipes: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.load();
  }
  load() {
    this.http.get<any[]>('http://localhost:3000/recipes').subscribe(r => this.recipes = r || []);
  }
  togglePublish(item: any) {
    const updated = { ...item, published: !item.published };
    this.http.put(`http://localhost:3000/recipes/${item.id}`, updated).subscribe(() => this.load());
  }
}
