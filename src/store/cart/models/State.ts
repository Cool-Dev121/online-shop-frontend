import { CartItemModel } from '../../../shared';

export interface State {
  items: { [id: string]: CartItemModel };
}
