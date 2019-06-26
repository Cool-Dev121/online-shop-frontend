import * as React from 'react';
import { styled, Card, Image } from '../../../components';
import { CartItemModel } from '../../../shared';

const CardContentContainer = styled.div``;

const ImageContainer = styled.div`
  height: 70px;
`;

interface Props {
  item: CartItemModel;
}

export const CartItem = (props: Props): JSX.Element => {
  const { item } = props;
  return (
    <Card
      renderContent={() => (
        <CardContentContainer>
          <ImageContainer>
            <Image imagePath={item.imagePath} />
          </ImageContainer>
        </CardContentContainer>
      )}
    />
  );
};
