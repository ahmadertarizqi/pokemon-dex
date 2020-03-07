export const setIdPokemons = (pokemon) => {
   pokemon.forEach((item, idx) => {
      return item.id = idx + 1;
   });
}

export const setIdFromURL = (url) => {
   return url.match(/\/(pokemon)\/(\d+)/)[2];
}

export const convertStats = (value, maxValue) => {
   return Math.ceil(Math.min(value / maxValue * 100, 100));
}