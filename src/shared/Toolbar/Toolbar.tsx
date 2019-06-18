import React from 'react';
import { styled } from '../../components';

const MainContainer = styled.div`
  background-color: azure;
  height: 70px;
  width: 100%;
`;

const Toolbar = (): JSX.Element => <MainContainer>Toolbar</MainContainer>;

export { Toolbar };
