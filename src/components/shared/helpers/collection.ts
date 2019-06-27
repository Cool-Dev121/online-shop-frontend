import { getKeys } from './object';

export function isLast<TItem>(collection: TItem[], index: number) {
  return collection.length - 1 === index;
}

export function fromRange(start: number, end: number) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

export function asArray<TModel>(items: { [id: string]: TModel }): TModel[] {
  return getKeys(items).map(id => items[id]);
}

export const generatePages = (
  currentPage: number,
  visiblePagesCount: number,
  pagesCount: number,
): number[] => {
  // assume: visiblePagesCount = 8, pagesCount = 15
  const halfOfVisiblePages = Math.round(visiblePagesCount / 2); // half = 4
  let startPageNumber = 1;
  let endPageNumber = pagesCount;
  if (halfOfVisiblePages >= currentPage) {
    // 1 2 [3] 4 5 6 7 8 // 4 >= 3
    startPageNumber = 1;
    endPageNumber = visiblePagesCount;
  } else if (pagesCount - halfOfVisiblePages < currentPage) {
    // 8 9 10 11 12 13 [14] 15 // 15 - 4 < 14 => 11 < 14
    // startPageNumber = 15 - 8 + 1 = 8
    startPageNumber = pagesCount - visiblePagesCount + 1;
    // endPageNumber = 15
    endPageNumber = pagesCount;
  } else {
    // 4 5 6 7 [8] 9 10 11
    // startPageNumber = 8 - 4 = 4
    startPageNumber = currentPage - halfOfVisiblePages;
    // endPageNumber = 8 + 8 - 4 - 1 = 11
    endPageNumber = currentPage + visiblePagesCount - halfOfVisiblePages - 1;
  }
  return fromRange(startPageNumber, endPageNumber);
};
