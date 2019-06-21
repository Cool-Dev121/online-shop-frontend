import React from 'react';
import { styled } from '../../components';
import { Loading } from '../Loading';

const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  z-index: 2;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullscreenLoadingSign = (): JSX.Element => (
  <MainContainer>
    <Loading />
  </MainContainer>
);
