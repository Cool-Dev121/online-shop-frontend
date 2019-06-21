import * as React from 'react';
import { styled } from '../../components';
import { ToolbarContainer } from './ToolbarContainer';

interface Props {
  renderToolbar: () => JSX.Element;
  renderSidebar: () => JSX.Element;
  renderContent: () => JSX.Element;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
`;

const SidebarContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const SidebarContainer = styled.div`
  flex: 1 0 100px;
  padding: ${props => props.theme.padding.md}px;
`;

const ContentContainer = styled.div`
  flex: 9 1;
  padding: ${props => props.theme.padding.md}px;
  overflow-y: auto;
  max-height: 100%;
`;

export const Layout = (props: Props): JSX.Element => {
  const { renderToolbar, renderSidebar, renderContent } = props;
  return (
    <MainContainer>
      <ToolbarContainer>{renderToolbar()}</ToolbarContainer>
      <SidebarContentContainer>
        <SidebarContainer>{renderSidebar()}</SidebarContainer>
        <ContentContainer>{renderContent()}</ContentContainer>
      </SidebarContentContainer>
    </MainContainer>
  );
};
