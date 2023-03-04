export const isEmpty = (obj: object | string) =>
  (typeof obj === 'string' && obj === '') ||
  obj === undefined ||
  obj === null ||
  (typeof obj === 'object' && Object.keys(obj).length === 0);
