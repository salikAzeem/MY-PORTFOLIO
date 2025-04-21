// export const getImageUrl = (path) => {
//   return new URL(`/assets/${path}`, import.meta.url).href;
// };

// Correct usage for assets:
export const getImageUrl = (path) => {
  return `/assets/${path}`;
};

