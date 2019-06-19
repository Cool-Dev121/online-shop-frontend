export interface Theme {
  padding: {
    sm: number;
    md: number;
    lg: number;
  };

  fontSize: {
    sm: number;
    md: number;
    lg: number;
  };

  button: {
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
    bgColor: string;
    fontColor: string;
    activeBgColor: string;
    activeFontColor: string;
  };

  table: {
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
    headerBgColor: string;
    evenRowBgColor: string;
    oddRowBgColor: string;
  };

  paginator: {
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
    bgColor: string;
    fontColor: string;
    activeBgColor: string;
    activeFontColor: string;
  };
}
