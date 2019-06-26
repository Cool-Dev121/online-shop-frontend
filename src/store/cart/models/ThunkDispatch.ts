import { ThunkDispatch as ThunkDispatchReduxThunk } from 'redux-thunk';
import { ThunkExtraArgument } from '../../../shared';
import { ActionTypes } from '../actions';
import { AppState } from '../../store';

export type ThunkDispatch = ThunkDispatchReduxThunk<AppState, ThunkExtraArgument, ActionTypes>;
