import React from 'react';
import { styled } from './themes';

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

interface Props {
  src: string;
}

export const Image = (props: Props): JSX.Element => {
  const { src } = props;
  return (
    <ImgContainer>
      <Img src={src} />
    </ImgContainer>
  );
};
