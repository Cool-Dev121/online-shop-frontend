const DELAY_MS = 300;

export function withDelay(fn: () => void) {
  setTimeout(() => {
    fn();
  }, DELAY_MS);
}
