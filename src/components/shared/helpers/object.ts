export function getKeysAsNumbers<TObject>(obj: TObject): number[] {
  return Object.keys(obj).map(k => parseInt(k, 10));
}

export function removeKey<TObject extends { [key: string]: any }>(obj: TObject, key: string) {
  const { [key]: deletedKey, ...otherKeys } = obj;
  return otherKeys;
}
