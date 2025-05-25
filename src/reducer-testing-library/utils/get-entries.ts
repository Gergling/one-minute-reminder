export const getEntries = <Model extends object>(
  obj: Model
) => Object.keys(obj).map((keyStr) => {
  const key = keyStr as keyof Model;
  const value = obj[key];
  return { key, value };
});
