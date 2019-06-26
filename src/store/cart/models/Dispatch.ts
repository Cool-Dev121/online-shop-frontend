import { ThunkDispatch } from 'redux-thunk';
import { State } from './State';
import { ThunkExtraArgument } from '../../../shared';
import { ActionTypes } from '../actions';
import { AppState } from '../../store';

export type Dispatch = ThunkDispatch<AppState, ThunkExtraArgument, ActionTypes>;
