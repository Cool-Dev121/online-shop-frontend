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
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HeaderContainer = styled.div`
  flex: 0 0 30px;
  font-size: ${props => props.theme.fontSize.lg}px;
  display: flex;
  align-items: center;
`;
const ContentContainer = styled.div`
  flex: 1 1;
`;
const FooterContainer = styled.div`
  flex: 0 0 30px;
  font-size: ${props => props.theme.fontSize.md}px;
  display: flex;
  align-items: center;
`;

interface Props {
  headerTitle: string;
  renderContent: () => JSX.Element;
  footerTitle: string;
}

export const Card = (props: Props): JSX.Element => {
  const { headerTitle, renderContent, footerTitle } = props;
  return (
    <MainContainer>
      <HeaderContainer>{headerTitle}</HeaderContainer>
      <ContentContainer>{renderContent()}</ContentContainer>
      <FooterContainer>{footerTitle}</FooterContainer>
    </MainContainer>
  );
};
