import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ProductSelectors from '../../selectors/products/products.selectors';

@Injectable()
export class ProductsFacadeService {
  private readonly store = inject(Store);

  allProducts$ = this.store.pipe(select(ProductSelectors.selectAllProducts));
}
