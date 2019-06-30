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
    formData.append('image', form.image);
    formData.append('name', form.productName);
    formData.append('price', form.price.toString());
    return http.upload<FormData, any>(Url.createProduct, formData);
  },
  updateProduct(form: ProductFormModel) {
    const formData = new FormData();
    if (form.image) {
      formData.append('image', form.image);
    }
    formData.append('name', form.productName);
    formData.append('price', form.price.toString());
    return http.upload<FormData, any>(`${Url.updateProduct}/${form.id}`, formData);
  },
};
