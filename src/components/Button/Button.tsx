import { styled } from '../themes';

interface ButtonProps {
  isActive: boolean;
}

const Button = styled.button<ButtonProps>`
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isActive ? props.theme.borderColor1 : props.theme.borderColor2)};

  padding: 10px;
  width: 100%;
  outline: none;
  cursor: pointer;

  color: ${props => (props.isActive ? props.theme.fontColor1 : props.theme.fontColor2)};
  background-color: ${props => props.theme.bgColor1};
`;

export { Button };
