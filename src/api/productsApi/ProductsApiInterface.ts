export interface ProductsApiInterface<TProductsPage> {
  getProducts: (start: number, count: number) => Promise<TProductsPage>;
}
