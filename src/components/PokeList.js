import React from 'react';
import PokeItem from './PokeItem';

const PokeList = (props) => {

   const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

   const helper = url => url.match(/\/(pokemon)\/(\d+)/)[2];

   const { pokemons, clickDetail, isLoading, loadMorePokemon } = props;

   return (
      <div className="row" style={{ paddingTop: '15rem' }}>
         {pokemons.map((pokemon, idx) => (
            <PokeItem
               key={idx}
               keyIdx={idx + 1}
               pokemon={pokemon}
               imgURL={imgURL}
               helper={helper}
               clickDetail={clickDetail}
            />
         ))}
         <button className="btn-more"
            disabled={isLoading}
            onClick={loadMorePokemon}
         >
            {isLoading ? 'Fetching Pokemon...' : 'Load More Pokemon'}
         </button>
      </div>
   );
}

export default PokeList;