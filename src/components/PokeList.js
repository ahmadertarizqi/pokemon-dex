import React from 'react';
import { setIdFromURL } from '../utils';

const PokeList = (props) => {
   const { pokemons, clickDetail, isLoading, loadMorePokemon, search, pokemonCategory } = props;
   console.log(pokemons);
   
   return (
      <div className="row" style={{ paddingTop: '15rem' }}>
         {pokemons.map((pokemon, idx) => (
            <PokeItem
               key={idx}
               pokemon={pokemon}
               clickDetail={clickDetail}
            />
         ))}
         
         {search !== '' || pokemonCategory !== 'all' ? 
            null :
            <button className="btn-more"
               disabled={isLoading}
               onClick={loadMorePokemon}
            >
               {isLoading ? 'Fetching Pokemon...' : 'Load More Pokemon'}
            </button>
         }
      </div>
   );
}
export default PokeList;

const PokeItem = ({ pokemon, clickDetail }) => {
   const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

   return (
      <div className="columns lg-3 sm-6">
         <div className="poke-item" onClick={() => clickDetail(setIdFromURL(pokemon.url || pokemon.pokemon.url))} >
            <div className="image">
               <img src={`${imgURL + setIdFromURL(pokemon.url || pokemon.pokemon.url)}.png`} alt="" />
            </div>
            <div className="content">
               <h2 className="name">{pokemon.name || pokemon.pokemon.name}</h2>
            </div>
         </div>
      </div>
   );
}