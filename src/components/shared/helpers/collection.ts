export function isLast<TItem>(collection: TItem[], index: number) {
  return collection.length - 1 === index;
}
