import { styled } from '../themes';
import { Activatable, isSatisfiesSafely } from '../shared';

export const PageButton = styled.div<Activatable>`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => (isSatisfiesSafely(props.isActive)
    ? props.theme.paginator.activeBgColor
    : props.theme.paginator.bgColor)};
  user-select: none;
  font-size: ${props => props.theme.fontSize.md}px;
  color: ${props => (isSatisfiesSafely(props.isActive)
    ? props.theme.paginator.activeFontColor
    : props.theme.paginator.fontColor)};
  &:hover {
    background-color: ${props => props.theme.paginator.activeBgColor};
    color: ${props => props.theme.paginator.activeFontColor};
  }
`;
