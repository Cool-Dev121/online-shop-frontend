import { ProductsTableProductModel } from '../../../shared';

export const REQUEST_TABLE_PRODUCTS_SUCCESS = '[PRODUCTS] REQUEST_TABLE_PRODUCTS_SUCCESS';

interface RequestTableProductsSuccessAction {
  type: typeof REQUEST_TABLE_PRODUCTS_SUCCESS;
  payload: {
    items: ProductsTableProductModel[];
    totalItemsCount: number;
  };
}

export type ActionTypes = RequestTableProductsSuccessAction;
