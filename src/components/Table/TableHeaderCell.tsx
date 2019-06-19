import React from 'react';
import { ChildrenAcceptable } from '../shared';
import { styled } from '../themes';

interface MainContainerProps {
  width: number;
}

const MainContainer = styled.div<MainContainerProps>`
  flex: ${props => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  padding: 5px;
  font-weight: bold;
`;

interface Props extends ChildrenAcceptable {
  width: number;
}

export const TableHeaderCell = (props: Props): JSX.Element => {
  const { children, width } = props;
  return <MainContainer width={width}>{children}</MainContainer>;
};
