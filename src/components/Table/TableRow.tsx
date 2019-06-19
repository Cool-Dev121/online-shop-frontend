import React from 'react';
import { ChildrenAcceptable } from '../shared';
import { styled } from '../themes';

interface MainContainerProps {
  isOdd?: boolean;
}

const MainContainer = styled.div<MainContainerProps>`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.isOdd !== undefined
    ? props.isOdd
      ? props.theme.table.oddRowBgColor
      : props.theme.table.evenRowBgColor
    : 'transparent')};
  overflow: hidden;
  height: 100%;
`;

interface Props extends ChildrenAcceptable {
  isOdd?: boolean;
}

export const TableRow = (props: Props): JSX.Element => {
  const { children, isOdd } = props;
  return <MainContainer isOdd={isOdd}>{children}</MainContainer>;
};
