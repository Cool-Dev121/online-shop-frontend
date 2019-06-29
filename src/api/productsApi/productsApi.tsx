import { ProductsApiConcrete } from './ProductsApiConcrete';
import { PagedModel, ProductsProductResponseModel, ProductResponseModel } from '../models';
import { http } from '../../helpers';
import { Url, ProductFormModel } from '../../shared';

export const productsApi: ProductsApiConcrete = {
  getProducts(start: number, count: number): Promise<PagedModel<ProductsProductResponseModel>> {
    return http.get<PagedModel<ProductsProductResponseModel>>(Url.getProducts, { start, count });
  },
  getProduct(id: string): Promise<ProductResponseModel> {
    return http.get<ProductResponseModel>(`${Url.getProduct}/${id}`);
  },
  createProduct(form: ProductFormModel) {
    const formData = new FormData();
    debugger;
    formData.append('image', form.image as any, (form.image as any).name);
    formData.append('name', form.productName);
    formData.append('price', form.price.toString());

    return http.upload<any, any>(Url.createProduct, formData);
  },
};
