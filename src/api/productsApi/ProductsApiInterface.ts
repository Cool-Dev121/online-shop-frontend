export interface ProductsApiInterface<
  TProductsPage,
  TProduct,
  TCreateProductRequest,
  TUpdateProductRequest
> {
  getProducts: (start: number, count: number) => Promise<TProductsPage>;
  getProduct: (id: string) => Promise<TProduct>;
  createProduct: (form: TCreateProductRequest) => Promise<void>;
  updateProduct: (form: TUpdateProductRequest) => Promise<void>;
  removeProduct: (id: string) => Promise<void>;
}
