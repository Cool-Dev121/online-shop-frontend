interface CreateOrderItemRequestModel {
  productId: string;
  count: number;
}

export interface CreateOrderRequestModel {
  items: CreateOrderItemRequestModel[];
}
