import { ProductsProductResponseModel, PagedModel, ProductResponseModel } from '../models';
import { ProductsApiInterface } from './ProductsApiInterface';
import { ProductFormModel } from '../../shared';

export type ProductsApiConcrete = ProductsApiInterface<
  PagedModel<ProductsProductResponseModel>,
  ProductResponseModel,
  ProductFormModel,
  ProductFormModel
>;
