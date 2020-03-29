import Axios from 'axios';

const URL = 'https://pokeapi.co/api/v2';

const fetchPokemon = (onSuccess, onFailed, endpoint) => {
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
      fetchPokemon(onSuccess, onFailed, endpoint);
   },
   getPokemonDetail: (onSuccess, onFailed, id) => {
      const endpoint = `/pokemon/${id}`;
      fetchPokemon(onSuccess, onFailed, endpoint);
   },
   getPokemonType: (onSuccess, onFailed, id) => {
      const endpoint = `/type/${id}`;
      fetchPokemon(onSuccess, onFailed, endpoint);
   }
}