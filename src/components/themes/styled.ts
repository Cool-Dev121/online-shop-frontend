import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { Theme } from './models';

export const styled = baseStyled as ThemedStyledInterface<Theme>;
