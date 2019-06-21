import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { State } from '../models';
import { REQUEST_TABLE_PRODUCTS_SUCCESS, ActionTypes } from './types';
import { ThunkExtraArgument, ProductsTableProductModel } from '../../../shared';
import { ProductsProductResponseModel } from '../../../api';
import { startApiCall, apiCallFailed, apiCallEnded } from '../../app';

export function requestTableProductsSuccess(
  items: ProductsTableProductModel[],
  totalItemsCount: number,
): ActionTypes {
  return {
    type: REQUEST_TABLE_PRODUCTS_SUCCESS,
    payload: {
      items,
      totalItemsCount,
    },
  };
}

export const requestTableProductsActionCreator: ActionCreator<
ThunkAction<Promise<ActionTypes | void>, State, ThunkExtraArgument, ActionTypes>
> = (start: number, count: number) => async (
  dispatch: Dispatch,
  _,
  { api },
): Promise<ActionTypes | void> => {
  dispatch(startApiCall());
  try {
    const result = await api.products.getProducts(start, count);
    const mappedResult: ProductsTableProductModel[] = result.items.map(
      (product: ProductsProductResponseModel) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        imagePath: product.image,
      } as ProductsTableProductModel),
    );
    return dispatch(requestTableProductsSuccess(mappedResult, result.totalItems));
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};
