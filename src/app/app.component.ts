import { Component, Input } from '@angular/core';
import { Category } from './interface/category';
import { Product } from './components/product-card/product';

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
  products: Product[] =
  [
    {
      id: 0,
      product_name: "Zapato 1",
      price: 50,
      url: "franela.png"
    },
    {
      id: 1,
      product_name: "Zapato 2",
      price: 70,
      url: "franela.png"
    },
    {
      id: 2,
      product_name: "Camisa 1",
      price: 20,
      url: "franela.png"
    },
    {
      id: 3,
      product_name: "Pantalon 1",
      price: 30,
      url: "franela.png"
    },
    {
      id: 4,
      product_name: "Media 1",
      price: 10,
      url: "franela.png"
    },
    {
      id: 5,
      product_name: "Media 2",
      price: 15,
      url: "franela.png"
    }
  ]
  capture_product(product_app_component: Product){
    console.log(product_app_component)
  }   
}

