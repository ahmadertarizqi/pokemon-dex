import Axios from 'axios';

const URL = 'https://pokeapi.co/api/v2';

async function fetchData(endpoint) {
   const options = {
      headers: { 'Content-Type': 'application/json' }
   }
   try {
      const response = await Axios.get(URL + endpoint, options);
      return response;
   } catch (error) {
      console.log('fetchData error : ' + error);
      return error;
   }
}

export async function getPokemons(offset, limit) {
   const endpoint = `/pokemon/?offset=${offset}&limit=${limit}`;
   const response = await fetchData(endpoint);
   return response;
}

export async function getPokemonDetail(id) {
   const endpoint = `/pokemon/${id}`;
   const response = await fetchData(endpoint);
   return response;
}

export async function getPokemonType(id) {
   const endpoint = `/type/${id}`;
   const response = await fetchData(endpoint);
   return response;
}