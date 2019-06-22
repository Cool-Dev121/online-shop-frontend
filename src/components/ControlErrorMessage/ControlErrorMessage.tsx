import { styled } from '../themes';

export const ControlErrorMessage = styled.div`
  height: 15px;
  line-height: 15px;
  width: 100%;
  color: ${props => props.theme.color.error};
  font-size: ${props => props.theme.fontSize.sm}px;
`;
