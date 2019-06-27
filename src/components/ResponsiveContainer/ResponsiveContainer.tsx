import { styled } from '../../components';

type WidthsInPercent = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

interface Props {
  widthsInPercent?: WidthsInPercent;
}

function getValueOrDefault<TValue>(value: TValue | undefined, defaultValue: TValue): TValue {
  return value === undefined || value === null ? defaultValue : value;
}

const defaultValues: WidthsInPercent = {
  sm: 90,
  md: 80,
  lg: 50,
  xl: 30,
};

export const ResponsiveContainer = styled.div<Props>`
  @media (min-width: 0px) {
    width: 100%;
  }
  @media (min-width: ${props => props.theme.gridOptions.sm}px) {
    width: ${props => getValueOrDefault(props.widthsInPercent, defaultValues).sm}%;
  }
  @media (min-width: ${props => props.theme.gridOptions.md}px) {
    width: ${props => getValueOrDefault(props.widthsInPercent, defaultValues).md}%;
  }
  @media (min-width: ${props => props.theme.gridOptions.lg}px) {
    width: ${props => getValueOrDefault(props.widthsInPercent, defaultValues).lg}%;
  }
  @media (min-width: ${props => props.theme.gridOptions.xl}px) {
    width: ${props => getValueOrDefault(props.widthsInPercent, defaultValues).xl}%;
  }
`;
