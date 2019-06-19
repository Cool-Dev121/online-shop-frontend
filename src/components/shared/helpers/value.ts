export function isSatisfiesSafely(value: boolean | undefined): boolean {
  return value !== undefined && value !== false;
}
