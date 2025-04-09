import { Component, Input } from '@angular/core';
import { Product } from '../product-card/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input() Shopping_cart_num: number = 0
  @Input() Products_shopping_cart: Product[] = []

  constructor(private modalService: NgbModal) {}

  openModal(content: any) {
    this.modalService.open(content)
  }
}
