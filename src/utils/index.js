export const setIdFromURL = (url) => {
   return url.match(/\/(pokemon)\/(\d+)/)[2];
}

export const convertStats = (value, maxValue) => {
   return Math.ceil(Math.min(value / maxValue * 100, 100));
}