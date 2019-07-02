import { UserType } from '../UserType';

export interface UserDataModel {
  username: string;
  id: string;
  role: UserType;
  expires: number;
}
