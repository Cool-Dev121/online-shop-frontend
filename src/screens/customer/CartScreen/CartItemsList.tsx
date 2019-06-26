import * as React from 'react';
import { connect } from 'react-redux';
import { getKeys } from 'eslint-visitor-keys';
import { styled, List } from '../../../components';
import { CartItemModel } from '../../../shared';
import { AppState, CartDispatch } from '../../../store';
import { CartItem } from './CartItem';

const MainContainer = styled.div``;

interface OwnProps {}
interface StateProps {
  items: CartItemModel[];
}
interface DispatchProps {
  // onPageChange: (start: number, count: number) => void;
}
type Props = OwnProps & StateProps & DispatchProps;

const CartItemsListInner = (props: Props): JSX.Element => {
  const { items } = props;
  return (
    <MainContainer>
      <List
        renderItem={(item: CartItemModel, index: number) => (
          <div
            style={{
              marginBottom: index === items.length - 1 ? 0 : '5px',
            }}
          >
            <CartItem item={item} />
          </div>
        )}
        items={items}
      />
    </MainContainer>
  );
};

const asArray = (items: { [id: string]: CartItemModel }): CartItemModel[] => getKeys(items).map(id => items[id]);

const mapStateToProps = (state: AppState) => {
  const { cart } = state;
  return { items: asArray(cart.items) };
};

const mapDispatchToProps = (dispatch: CartDispatch) => ({
  // onPageChange: (start: number, count: number) => {
  //   dispatch(requestTableProductsActionCreator(start, count));
  // },
});

export const CartItemsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartItemsListInner);
