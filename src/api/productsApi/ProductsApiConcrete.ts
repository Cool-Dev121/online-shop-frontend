import { ProductsProductResponseModel, PagedModel, ProductResponseModel } from '../models';
import { ProductsApiInterface } from './ProductsApiInterface';

export type ProductsApiConcrete = ProductsApiInterface<
  PagedModel<ProductsProductResponseModel>,
  ProductResponseModel
>;
