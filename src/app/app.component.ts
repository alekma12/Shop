import { Component, Input } from '@angular/core';
import { Category } from './interface/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  categories:  Category[] =
  [
    { 
      name: "Zapatos",
      discount:30
    },
    { 
      name: "Camisas",
      discount:10
    },
    { 
      name: "Pantalones",
      discount:5
    },
    { 
      name: "medias",
      discount:40
    }
  ]
}
