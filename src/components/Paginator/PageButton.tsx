import { styled } from '../themes';

interface Props {
  isActive?: boolean;
}

export const PageButton = styled.div<Props>`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => (props.isActive !== undefined && props.isActive !== false
    ? props.theme.paginator.activeBgColor
    : 'transparent')};
  user-select: none;
  font-size: 12px;
`;
