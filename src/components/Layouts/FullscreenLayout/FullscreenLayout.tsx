import React from 'react';
import { styled } from '../../themes';

interface Props {
  renderContent: () => JSX.Element;
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const FullscreenLayout = (props: Props): JSX.Element => {
  const { renderContent } = props;
  return <MainContainer>{renderContent()}</MainContainer>;
};
