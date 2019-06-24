export interface ProductsApiInterface<TProductsPage, TProduct> {
  getProducts: (start: number, count: number) => Promise<TProductsPage>;
  getProduct: (id: string) => Promise<TProduct>;
}
