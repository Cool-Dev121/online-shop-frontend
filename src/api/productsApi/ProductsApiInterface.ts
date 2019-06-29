export interface ProductsApiInterface<TProductsPage, TProduct, TCreateProduct> {
  getProducts: (start: number, count: number) => Promise<TProductsPage>;
  getProduct: (id: string) => Promise<TProduct>;
  createProduct: (form: TCreateProduct) => Promise<void>;
}
