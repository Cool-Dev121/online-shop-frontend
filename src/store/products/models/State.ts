import { ProductsTableProductModel, ProductFormModel } from '../../../shared';

export interface State {
  items: ProductsTableProductModel[];
  totalItemsCount: number;
  selectedProduct?: ProductFormModel;
}
