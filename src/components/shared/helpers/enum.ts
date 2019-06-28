export interface KeyValue<TValue> {
  key: number;
  value: TValue;
}

function isNumeric(n: any) {
  return !isNaN(Number(n)); // eslint-disable-line
}

export function numericEnumToArray<TValue>(en: any): KeyValue<TValue>[] {
  const numericKeys = Object.keys(en).filter(key => isNumeric(key));
  return numericKeys.map(key => ({ key: +key, value: en[key] } as KeyValue<TValue>));
}
