import React, { ReactNode, Fragment } from 'react';
import styled from 'styled-components';
import { NoItemsSign } from '../NoItemsSign';

interface Props {
  isNoItems: boolean;
  children: ReactNode;
}

const ChildrenContainerIfNoItems = styled.div`
  display: none;
`;

const ChildrenContainer = (props: { isNoItems: boolean; children: React.ReactNode }) => {
  const { isNoItems, children } = props;
  const Container = isNoItems ? ChildrenContainerIfNoItems : Fragment;
  return <Container>{children}</Container>;
};

export const NoItemsDetect = (props: Props) => {
  const { isNoItems, children } = props;

  return (
    <Fragment>
      <ChildrenContainer isNoItems={isNoItems}>{children}</ChildrenContainer>
      {isNoItems && <NoItemsSign />}
    </Fragment>
  );
};
