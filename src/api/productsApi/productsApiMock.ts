import { ProductsApiConcrete } from './ProductsApiConcrete';
import { PagedModel, ProductsProductResponseModel, ProductResponseModel } from '../models';
import { withDelay } from '../../helpers';
import { ProductFormModel } from '../../shared';

const generateProducts = (start: number, count: number): ProductsProductResponseModel[] => {
  const generated: ProductsProductResponseModel[] = [];
  for (let i = start; i < start + count; i++) {
    generated.push({
      id: i.toString(),
      name: `Product Name ${i}`,
      price: 1,
      image: 'https://cdn.pixabay.com/photo/2014/10/15/22/06/apples-490474_1280.jpg',
    });
  }
  return generated;
};

const generateProduct = (id: string): ProductResponseModel => {
  const product = {
    id: `${id}`,
    name: 'Mocked Product Name',
    price: 1,
    image: 'https://cdn.pixabay.com/photo/2014/10/15/22/06/apples-490474_1280.jpg',
  };
  return product;
};

export const productsApiMock: ProductsApiConcrete = {
  getProducts(start: number, count: number): Promise<PagedModel<ProductsProductResponseModel>> {
    return new Promise((res) => {
      withDelay(() => {
        const totalItemsCount = 12;
        res({
          items: generateProducts(
            start,
            start + count > totalItemsCount ? totalItemsCount - start : count,
          ),
          totalItemsCount,
        });
      });
    });
  },
  getProduct(id: string): Promise<ProductResponseModel> {
    return new Promise((res) => {
      withDelay(() => {
        res({
          ...generateProduct(id),
        });
      });
    });
  },
  createProduct(form: ProductFormModel): Promise<void> {
    return new Promise((res) => {
      withDelay(() => {
        res();
      });
    });
  },
};
