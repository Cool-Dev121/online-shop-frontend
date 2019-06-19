import { styled } from '../themes';
import { shadowed } from '../shared';

export const ToolbarContainer = styled.div`
  padding: ${props => props.theme.padding.md}px;
  background-color: ${props => props.theme.toolbar.bgColor};
  border-bottom-left-radius: ${props => props.theme.toolbar.borderRadius}px;
  border-bottom-right-radius: ${props => props.theme.toolbar.borderRadius}px;
  height: 50px;
  ${shadowed}
`;
