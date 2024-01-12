import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsActions } from '../../+state/actions/products.actions';
import { ProductsFacadeService } from '../../+state/facades/products/products.facade.service';
import { Product } from '../../models/products';

@Component({
  selector: 'ecommerce-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private store: Store,
    public productsFacade: ProductsFacadeService
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
    console.log(this.products);
  }
  getAllProducts() {
    this.store.dispatch(ProductsActions.loadProducts());
    this.productsFacade.allProducts$.subscribe(
      (products: Product[]) => (this.products = products)
    );
  }
}
