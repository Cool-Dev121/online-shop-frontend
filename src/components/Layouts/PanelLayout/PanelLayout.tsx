import React from 'react';
import { styled } from '../../themes';

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const LandingPanel = styled.div`
  background-color: ${props => props.theme.panelLayout.landingBgColor};
  @media (min-width: 0px) {
    flex: 0;
  }
  @media (min-width: ${props => props.theme.gridOptions.sm}px) {
    flex: 0;
  }
  @media (min-width: ${props => props.theme.gridOptions.md}px) {
    flex: 1;
  }
  @media (min-width: ${props => props.theme.gridOptions.lg}px) {
    flex: 2;
  }
  @media (min-width: ${props => props.theme.gridOptions.xl}px) {
    flex: 3;
  }
`;

const ContentPanel = styled.div`
  background-color: ${props => props.theme.panelLayout.contentBgColor};
  flex: 1;
  padding: ${props => props.theme.padding.lg}px;
`;

interface Props {
  renderContent: () => JSX.Element;
}

export const PanelLayout = (props: Props): JSX.Element => {
  const { renderContent } = props;

  return (
    <MainContainer>
      <LandingPanel />
      <ContentPanel>{renderContent()}</ContentPanel>
    </MainContainer>
  );
};
