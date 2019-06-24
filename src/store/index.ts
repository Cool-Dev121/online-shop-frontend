export * from './store';
export {
  // @ts-ignore
  Dispatch as OrdersDispatch,
  requestTableOrdersActionCreator,
  requestTableOrdersSuccess,
} from './orders';
export {
  // @ts-ignore
  Dispatch as ProductsDispatch,
  requestTableProductsActionCreator,
  requestTableProductsSuccess,
  requestProductByIdActionCreator,
} from './products';
export * from './middlewares';
