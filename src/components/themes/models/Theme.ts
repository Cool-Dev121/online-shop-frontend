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

  border: {
    color: string;
    radius: number;
    width: number;
  };

  color: {
    error: string;
  };

  toolbar: {
    bgColor: string;
    borderRadius: number;
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

  card: {
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
    bgColor: string;
  };

  input: {
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
    titleColor: string;
  };
}
