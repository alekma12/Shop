import { Component } from '@angular/core';
import { Product } from '../product-card/product';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
title = 'shop';

  /**
   * Esta propiedad es de tipo Product y sirve para pasarle una lista de objetos luego de que el boton buy now sea precionado
   *
   * @type {Product[]}
   * @memberof AppComponent
   */
  products_for_shopping_cart: Product[] = []
  /**
   * Esta propiedad es de tipo Category y sirve para definir las categorias que apareceran en la pagina
   *
   * @type {Category[]}
   * @memberof AppComponent
   */
  categories: Category[] =
    [
      {
        name: "Zapatos",
        discount: 30
      },
      {
        name: "Camisas",
        discount: 10
      },
      {
        name: "Pantalones",
        discount: 5
      },
      {
        name: "medias",
        discount: 40
      }
    ]


  /**
   * Esta propiedad es de tipo Product y sirve para definir los productos que apareceran en la pagina
   *
   * @type {Product[]}
   * @memberof AppComponent
   */
  products: Product[] =
    [
      {
        id: 0,
        product_name: "Zapato 1",
        price: 50,
        url: "franela.png",
        cantidad: 1
      },
      {
        id: 1,
        product_name: "Zapato 2",
        price: 70,
        url: "franela.png",
        cantidad: 1
      },
      {
        id: 2,
        product_name: "Camisa 1",
        price: 20,
        url: "franela.png",
        cantidad: 1
      },
      {
        id: 3,
        product_name: "Pantalon 1",
        price: 30,
        url: "franela.png",
        cantidad: 1
      },
      {
        id: 4,
        product_name: "Media 1",
        price: 10,
        url: "franela.png",
        cantidad: 1
      },
      {
        id: 5,
        product_name: "Media 2",
        price: 15,
        url: "franela.png",
        cantidad: 1
      }
    ]
  /**
   * La funcion capture_product captura el producto con el parametro product_app_component el cual es un parametro de la clase Product y 
   * lo agrega al array products_for_shopping_cart
   * @param {Product} product_app_component
   * @memberof AppComponent
   */
  capture_product(product_app_component: Product) {
    const index = this.products_for_shopping_cart.findIndex(product => product.id === product_app_component.id)
    if (index !== -1) {
      this.products_for_shopping_cart[index].cantidad++
    } else {
      this.products_for_shopping_cart.push(product_app_component)
    }
    console.log(this.products_for_shopping_cart)
  }

}
