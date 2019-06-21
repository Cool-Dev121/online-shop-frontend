import * as React from 'react';
import { Card } from '../components';

interface Props {
  imgPath: string;
  productName: string;
  productExtraData: string;
}

export const OrderItemCard = (props: Props): JSX.Element => {
  const { imgPath, productExtraData, productName } = props;
  return (
    <Card
      renderHeader={() => <div>{productName}</div>}
      renderContent={() => <div>{imgPath}</div>}
      renderFooter={() => <div>{productExtraData}</div>}
    />
  );
};
