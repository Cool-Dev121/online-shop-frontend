export function getKeysAsNumbers<TObject>(obj: TObject): number[] {
  return Object.keys(obj).map(k => parseInt(k, 10));
}
