import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/components/product-card/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product = new Product();
  @Output() touch_btn_buy: EventEmitter<Product> = new EventEmitter<Product>()

  event_btn_product(){
    this.touch_btn_buy.emit(this.product)
  }
}