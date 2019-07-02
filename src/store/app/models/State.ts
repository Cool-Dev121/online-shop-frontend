import { UserDataModel } from '../../../shared';

export interface State {
  isLoadingShown: boolean;
  userData: UserDataModel | null;
}
