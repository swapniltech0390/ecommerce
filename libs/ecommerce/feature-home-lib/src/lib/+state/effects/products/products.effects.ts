import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../../services/products/products.service';
import { ProductsActions } from '../../actions/products.actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      switchMap(() => {
        return this.productService
          .getAllProducts()
          .pipe(
            map((products) => ProductsActions.loadProductsSuccess({ products }))
          );
      })
    )
  );
}
