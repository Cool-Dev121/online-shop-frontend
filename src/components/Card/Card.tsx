import * as React from 'react';
import { styled } from '../themes';
import { shadowed } from '../shared';

const MainContainer = styled.div`
  border-radius: ${props => props.theme.card.borderRadius}px;
  border-width: ${props => props.theme.card.borderWidth}px;
  border-style: solid;
  border-color: ${props => props.theme.card.borderColor};
  background-color: ${props => props.theme.button.bgColor};
  ${shadowed}
  padding: ${props => props.theme.padding.md}px;
  box-sizing: border-box;
  height: 100%;
`;

const HeaderContainer = styled.div``;
const ContentContainer = styled.div``;
const FooterContainer = styled.div``;

interface Props {
  renderHeader: () => JSX.Element;
  renderContent: () => JSX.Element;
  renderFooter: () => JSX.Element;
}

export const Card = (props: Props): JSX.Element => {
  const { renderHeader, renderContent, renderFooter } = props;
  return (
    <MainContainer>
      <HeaderContainer>{renderHeader()}</HeaderContainer>
      <ContentContainer>{renderContent()}</ContentContainer>
      <FooterContainer>{renderFooter()}</FooterContainer>
    </MainContainer>
  );
};
