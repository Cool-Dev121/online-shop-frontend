import { ThunkDispatch } from 'redux-thunk';
import { State } from './State';
import { ThunkExtraArgument } from '../../../shared';
import { ActionTypes } from '../actions';

export type Dispatch = ThunkDispatch<State, ThunkExtraArgument, ActionTypes>;
