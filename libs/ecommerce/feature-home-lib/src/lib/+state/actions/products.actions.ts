import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../models/products';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Failure': props<{ error: unknown }>(),
  }
});
