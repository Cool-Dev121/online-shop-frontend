import { CartItemModel } from '../shared';

export const getItemSum = (item: CartItemModel): number => item.price * item.count;

export function getCartSum(items: CartItemModel[]): number {
  return items.reduce((prev: number, curr: CartItemModel) => prev + getItemSum(curr), 0);
}
