import React from 'react';
import { setIdFromURL } from '../utils';

const PokeItem = ({ pokemon, clickDetail }) => {

   const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

   return (
      <div className="columns lg-3 sm-6">
         <div className="poke-item" onClick={() => clickDetail(setIdFromURL(pokemon.url))} >
            <div className="image">
               <img src={`${imgURL + setIdFromURL(pokemon.url)}.png`} alt="" />
            </div>
            <div className="content">
               <h2 className="name">{pokemon.name}</h2>
            </div>
         </div>
      </div>
   );
}

export default PokeItem;