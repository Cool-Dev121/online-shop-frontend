export interface OrdersApiInterface<
  TOrdersPage,
  TCustomerPage,
  TOrder,
  TOrderStatus,
  TCreateOrderRequestModel
> {
  getOrders: (start: number, count: number) => Promise<TOrdersPage>;
  getOrdersOfUser: (start: number, count: number) => Promise<TCustomerPage>;
  changeOrderStatus: (id: string, changeOrderStatusRequestModel: TOrderStatus) => Promise<null>;
  getOrder: (id: string) => Promise<TOrder>;
  createOrder: (order: TCreateOrderRequestModel) => Promise<null>;
}
