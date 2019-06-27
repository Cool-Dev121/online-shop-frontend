import React from 'react';
import { styled, Text, TextSize } from '../../components';

const NoItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoItemsSign = (): JSX.Element => (
  <NoItemsContainer>
    <Text size={TextSize.xl} text="No items yet" />
  </NoItemsContainer>
);
