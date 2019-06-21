import * as React from 'react';
import { Card, styled } from '../components';

interface Props {
  imgPath: string;
  productName: string;
  productExtraData: string;
}

const MainContainer = styled.div`
  width: 150px;
  margin: ${props => props.theme.padding.md}px;
  height: 150px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
`;

export const OrderItemCard = (props: Props): JSX.Element => {
  const { imgPath, productExtraData, productName } = props;
  return (
    <MainContainer>
      <Card
        headerTitle={productName}
        renderContent={() => (
          <ImgContainer>
            <Img src={imgPath} />
          </ImgContainer>
        )}
        footerTitle={productExtraData}
      />
    </MainContainer>
  );
};
