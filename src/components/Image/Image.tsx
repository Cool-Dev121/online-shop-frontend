import React from 'react';
import { styled } from '../themes';

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageInner = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
`;

interface Props {
  imagePath: string;
  name?: string;
}

export const Image = (props: Props): JSX.Element => {
  const { imagePath, name } = props;
  return (
    <ImgContainer>
      <ImageInner src={imagePath} />
    </ImgContainer>
  );
};
