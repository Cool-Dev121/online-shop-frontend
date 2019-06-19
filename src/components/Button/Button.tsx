import { styled } from '../themes';
import { Activatable, isSatisfiesSafely, shadowed } from '../shared';

export const Button = styled.button<Activatable>`
  border-radius: ${props => props.theme.button.borderRadius}px;
  border-width: ${props => props.theme.button.borderWidth}px;
  border-style: solid;
  border-color: ${props => props.theme.button.borderColor};
  padding: 10px;
  width: 100%;
  outline: none;
  cursor: pointer;
  font-size: ${props => props.theme.fontSize.md}px;
  color: ${props => (isSatisfiesSafely(props.isActive)
    ? props.theme.button.activeFontColor
    : props.theme.button.fontColor)};
  background-color: ${props => (isSatisfiesSafely(props.isActive)
    ? props.theme.button.activeBgColor
    : props.theme.button.bgColor)};
  &:hover {
    background-color: ${props => props.theme.button.activeBgColor};
    color: ${props => props.theme.button.activeFontColor};
  }
  ${shadowed}
`;
