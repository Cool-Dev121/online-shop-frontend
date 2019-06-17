import { ThemeType } from './ThemeType';
import { theme as defaultTheme } from './theme-default';
import { Theme } from './models';

export const getTheme = (theme: ThemeType): Theme => {
  switch (theme) {
    default:
    case ThemeType.Default:
      return defaultTheme;
  }
};
