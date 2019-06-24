import { ProductsTableProductModel, ProductFormModel } from '../../../shared';

export const REQUEST_TABLE_PRODUCTS_SUCCESS = '[PRODUCTS] REQUEST_TABLE_PRODUCTS_SUCCESS';
export const REQUEST_PRODUCT_BY_ID_SUCCESS = '[PRODUCTS] REQUEST_PRODUCT_BY_ID_SUCCESS';

interface RequestTableProductsSuccessAction {
  type: typeof REQUEST_TABLE_PRODUCTS_SUCCESS;
  payload: {
    items: ProductsTableProductModel[];
    totalItemsCount: number;
  };
}

interface RequestProductByIdSuccessAction {
  type: typeof REQUEST_PRODUCT_BY_ID_SUCCESS;
  payload: {
    item: ProductFormModel;
  };
}

export type ActionTypes = RequestTableProductsSuccessAction | RequestProductByIdSuccessAction;
