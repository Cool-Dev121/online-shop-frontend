import { styled } from './themes';

interface Props {
  color: string;
  width: number;
}

export const VerticalDivider = styled.div<Props>`
  width: ${props => props.width}px;
  min-height: 100%;
  background-color: ${props => props.color};
`;
