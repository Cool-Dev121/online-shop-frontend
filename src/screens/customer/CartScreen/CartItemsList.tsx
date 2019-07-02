import * as React from 'react';
import { connect } from 'react-redux';
import {
  styled, List, Text, Button, TextSize, ResponsiveContainer,
} from '../../../components';
import { CartItemModel } from '../../../shared';
import {
  AppState,
  CartDispatch,
  getCartItemsArray,
  getCartItemsSum,
  requestCreateOrderActionCreator,
} from '../../../store';
import { CartItem } from './CartItem';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ControlsContainer = styled.div``;

interface OwnProps {}
interface StateProps {
  items: CartItemModel[];
  cartSum: number;
}
interface DispatchProps {
  makeOrder: () => void;
}
type Props = OwnProps & StateProps & DispatchProps;

const CartItemsListInner = (props: Props): JSX.Element => {
  const { items, cartSum, makeOrder } = props;
  return (
    <MainContainer>
      <ResponsiveContainer
        widthsInPercent={{
          sm: 100,
          md: 100,
          lg: 70,
          xl: 60,
        }}
      >
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
          <Text size={TextSize.xxl} text={`Total: $${cartSum}`} />
          <Button onClick={makeOrder}>Make an order</Button>
        </ControlsContainer>
      </ResponsiveContainer>
    </MainContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  items: getCartItemsArray(state),
  cartSum: getCartItemsSum(state),
});

const mapDispatchToProps = (dispatch: CartDispatch) => ({
  makeOrder: () => {
    dispatch(requestCreateOrderActionCreator());
  },
});

export const CartItemsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartItemsListInner);
