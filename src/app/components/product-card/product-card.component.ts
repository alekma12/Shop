import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product_title: string = "franela 1"
  @Input() precio_product_card: number = 2
  @Output() touch_btn_buy: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() id: number = 0

  event_btn_product(){
  }
}