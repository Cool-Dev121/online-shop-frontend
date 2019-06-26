import { ActionCreator as ReduxActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ActionTypes } from '../actions';
import { AppState } from '../../store';
import { ThunkExtraArgument } from '../../../shared';

export type ActionCreator = ReduxActionCreator<
  ThunkAction<Promise<ActionTypes | void>, AppState, ThunkExtraArgument, ActionTypes>
>;
