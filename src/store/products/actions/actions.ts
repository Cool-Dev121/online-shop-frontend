import { Dispatch } from 'redux';
import {
  REQUEST_TABLE_PRODUCTS_SUCCESS,
  REQUEST_PRODUCT_BY_ID_SUCCESS,
  ActionTypes,
} from './types';
import { ProductsTableProductModel, ProductFormModel } from '../../../shared';
import { ProductsProductResponseModel } from '../../../api';
import { startApiCall, apiCallFailed, apiCallEnded } from '../../app';
import { ActionCreator } from '../models';

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

export function requestProductByIdSuccess(item: ProductFormModel): ActionTypes {
  return {
    type: REQUEST_PRODUCT_BY_ID_SUCCESS,
    payload: {
      item,
    },
  };
}

export const requestTableProductsActionCreator: ActionCreator = (
  start: number,
  count: number,
) => async (dispatch: Dispatch, _, { api }): Promise<ActionTypes | void> => {
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

export const requestProductByIdActionCreator: ActionCreator = (id: string) => async (
  dispatch: Dispatch,
  _,
  { api },
): Promise<ActionTypes | void> => {
  dispatch(startApiCall());
  try {
    const result = await api.products.getProduct(id);
    const mappedResult: ProductFormModel = {
      id: result.id,
      productName: result.name,
      image: result.image,
      price: result.price,
    };
    return dispatch(requestProductByIdSuccess(mappedResult));
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};
