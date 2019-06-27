import * as React from 'react';
import { connect } from 'react-redux';
import {
  styled, Card, Image, Button, Text, TextSize,
} from '../../../components';
import { CartItemModel } from '../../../shared';
import { getItemSum } from '../../../helpers';
import {
  CartDispatch,
  incrementItemCountActionCreator,
  removeItemFromCartActionCreator,
  decrementItemCountActionCreator,
} from '../../../store';

const CardContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemDescriptionContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 50px;
  width: 70px;
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.padding.sm}px;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ControlContainer = styled.div`
  width: 80px;
  padding: ${props => props.theme.padding.sm}px;
`;

interface OwnProps {
  item: CartItemModel;
}
interface DispatchProps {
  onIncItem: (id: string) => void;
  onDecItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
}
type Props = OwnProps & DispatchProps;

const CartItemInner = (props: Props): JSX.Element => {
  const {
    item, onIncItem, onDecItem, onRemoveItem,
  } = props;
  return (
    <Card
      renderContent={() => (
        <CardContentContainer>
          <ItemDescriptionContainer>
            <ImageContainer>
              <Image imagePath={item.imagePath} />
            </ImageContainer>
            <ItemDescription>
              <Text size={TextSize.lg} text={item.name} />
              <Text
                size={TextSize.md}
                text={`$${item.price} x ${item.count} = $${getItemSum(item)}`}
              />
            </ItemDescription>
          </ItemDescriptionContainer>
          <ControlsContainer>
            <ControlContainer>
              <Button onClick={() => onIncItem(item.id)}>+</Button>
            </ControlContainer>
            <ControlContainer>
              <Button onClick={() => onDecItem(item.id)}>-</Button>
            </ControlContainer>
            <ControlContainer>
              <Button onClick={() => onRemoveItem(item.id)}>Remove</Button>
            </ControlContainer>
          </ControlsContainer>
        </CardContentContainer>
      )}
    />
  );
};

const mapDispatchToProps = (dispatch: CartDispatch) => ({
  onIncItem: (id: string) => {
    dispatch(incrementItemCountActionCreator(id));
  },
  onDecItem: (id: string) => {
    dispatch(decrementItemCountActionCreator(id));
  },
  onRemoveItem: (id: string) => {
    dispatch(removeItemFromCartActionCreator(id));
  },
});

export const CartItem = connect(
  null,
  mapDispatchToProps,
)(CartItemInner);
