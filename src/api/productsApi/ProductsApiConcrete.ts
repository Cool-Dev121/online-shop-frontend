import { ProductsProductResponseModel, PagedModel } from '../models';
import { ProductsApiInterface } from './ProductsApiInterface';

export type ProductsApiConcrete = ProductsApiInterface<PagedModel<ProductsProductResponseModel>>;
