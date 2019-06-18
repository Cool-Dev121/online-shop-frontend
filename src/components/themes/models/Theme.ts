export interface Theme {
  bgColor1: string;
  bgColor2: string;

  fontColor1: string;
  fontColor2: string;

  borderColor1: string;
  borderColor2: string;

  borderRadius: number;

  table: {
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
    headerBgColor: string;
    evenRowBgColor: string;
    oddRowBgColor: string;
  };
}
