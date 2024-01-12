import { Component, Input } from '@angular/core';
import { Product } from '../../../models/products';

@Component({
  selector: 'ecommerce-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product : Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating:{
      rate: 0,
      count: 0
    }
  };
}
