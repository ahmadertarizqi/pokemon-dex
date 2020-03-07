import Axios from 'axios';

const URL = 'https://pokeapi.co/api/v2';

const getMethod = (onSuccess, onFailed, endpoint) => {
   Axios.get(URL + endpoint)
      .then(response => {
         // console.log(response);
         onSuccess(response);
      })
      .catch(error => {
         if (onFailed) onFailed('this from error', error);
      });
}

export default {
   getPokemons: (onSuccess, onFailed, offset, limit) => {
      const endpoint = `/pokemon/?offset=${offset}&limit=${limit}`;
      getMethod(onSuccess, onFailed, endpoint);
   },
   getPokemonDetail: (onSuccess, onFailed, id) => {
      const endpoint = `/pokemon/${id}`;
      getMethod(onSuccess, onFailed, endpoint);
   }
}