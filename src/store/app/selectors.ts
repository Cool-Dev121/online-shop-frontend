import { createSelector } from 'reselect';
import { AppState } from '../store';
import { UserDataModel, UserType } from '../../shared';

const userDataSelector = (state: AppState): UserDataModel | null => state.app.userData;

export const getUserType = createSelector(
  [userDataSelector],
  userData => (userData ? userData.role : UserType.Customer),
);

export const getIsSignedIn = createSelector(
  [userDataSelector],
  userData => !!userData,
);
