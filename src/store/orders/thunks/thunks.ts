import { Dispatch } from 'redux';
import { apiHub } from '../../../api';
import { requestTableOrdersSuccess, requestTableOrdersError } from '../actions';

export const requestTableOrdersPendingThunk = (dispatch: Dispatch) => (
  start: number,
  count: number,
) => apiHub.orders
  .getOrders(start, count)
  .then(
    result => dispatch(requestTableOrdersSuccess(result.items, result.totalItems)),
    error => dispatch(requestTableOrdersError('Something went wrong')),
  );
