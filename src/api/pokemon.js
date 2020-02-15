import Axios from 'axios';

const URL = 'https://pokeapi.co/api/v2';

const getMethod = (onSuccess, onFailed, endpoint, timeout) => {
   setTimeout(() => {
      Axios.get(URL + endpoint)
         .then(response => {
            // console.log(response);
            onSuccess(response);
         })
         .catch(error => {
            if (onFailed) onFailed('this from error', error);
         });
   }, timeout);
}

export default {
   getPokemons: (onSuccess, onFailed, timeout, offset, limit) => {
      const endpoint = `/pokemon/?offset=${offset}&limit=${limit}`;
      getMethod(onSuccess, onFailed, endpoint, timeout);
   },
   getPokemonDetail: (onSuccess, onFailed, timeout, id) => {
      const endpoint = `/pokemon/${id}`;
      getMethod(onSuccess, onFailed, endpoint, timeout);
   }
}