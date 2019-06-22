import { Theme } from '../../themes';

export const shadowed = () => `
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.15);
`;

export const bordered = (theme: Theme) => `
  border-radius: ${theme.border.radius}px;
  border-width: ${theme.border.width}px;
  border-style: solid;
  border-color: ${theme.border.color};
`;
