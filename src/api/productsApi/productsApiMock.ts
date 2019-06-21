import { ProductsApiConcrete } from './ProductsApiConcrete';
import { PagedModel, ProductsProductResponseModel } from '../models';

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

export const productsApiMock: ProductsApiConcrete = {
  getProducts(start: number, count: number): Promise<PagedModel<ProductsProductResponseModel>> {
    return new Promise((res) => {
      setTimeout(() => {
        const totalItems = 12;
        res({
          items: generateProducts(start, start + count > totalItems ? totalItems - start : count),
          totalItems,
        });
      }, 300);
    });
  },
};
