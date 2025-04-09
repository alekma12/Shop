import { Component, Input } from '@angular/core';
import { Product } from '../product-card/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() Products_header_shopping_cart: Product[] = []
  
}
