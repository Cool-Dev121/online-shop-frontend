export const logMiddleware = (s: any) => (next: any) => (action: any) => {
  console.log(`Action: ${action.type}`); // eslint-disable-line
  next(action);
};
