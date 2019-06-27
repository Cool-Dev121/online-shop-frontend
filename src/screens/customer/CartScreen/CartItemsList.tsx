import * as React from 'react';
import { connect } from 'react-redux';
import {
  styled, List, asArray, Text, Button, TextSize,
} from '../../../components';
import { CartItemModel } from '../../../shared';
import { AppState, CartDispatch } from '../../../store';
import { CartItem } from './CartItem';
import { getCartSum } from '../../../helpers';

const MainContainer = styled.div``;

const ControlsContainer = styled.div``;

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
      <ControlsContainer>
        <Text size={TextSize.xxl} text={`Total: $${getCartSum(items)}`} />
        <Button>Make an order</Button>
      </ControlsContainer>
    </MainContainer>
  );
};

// TODO: move items sum to map state to props with reselect
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
