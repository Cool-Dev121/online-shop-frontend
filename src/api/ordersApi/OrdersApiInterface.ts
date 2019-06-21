export interface OrdersApiInterface<TOrdersPage, TOrder, TOrderStatus> {
  getOrders: (start: number, count: number) => Promise<TOrdersPage>;
  getOrdersOfUser?: (start: number, count: number) => Promise<TOrdersPage>;
  getOrder?: (id: string) => Promise<TOrder>;
  createOrder?: () => Promise<null>;
  changeOrderStatus?: (id: string, status: TOrderStatus) => Promise<null>;
}
