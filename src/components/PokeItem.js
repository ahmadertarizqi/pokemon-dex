import React from 'react';

const PokeItem = ({ pokemon, imgURL, helper, clickDetail, keyIdx }) => {
   return (
      <div className="columns lg-3 sm-6">
         <div className="poke-item" onClick={() => clickDetail(keyIdx)} >
            <div className="image">
               <img src={`${imgURL + helper(pokemon.url)}.png`} alt="" />
            </div>
            <div className="content">
               <h2 className="name">{pokemon.name}</h2>
            </div>
         </div>
      </div>
   );
}

export default PokeItem;