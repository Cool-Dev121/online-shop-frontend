import React from 'react';
import { styled } from '../themes';
import { TextSize } from '../shared';

const TextContainer = styled.div<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
`;

export const Text = (props: { text: string | number; size: TextSize }) => {
  const { text, size } = props;
  return <TextContainer fontSize={size}>{text}</TextContainer>;
};
