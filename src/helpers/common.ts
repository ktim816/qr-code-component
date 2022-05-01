export const getImage = (path: string) => {
  return new URL(`/src/assets/images/${path}`, import.meta.url).href;
};
