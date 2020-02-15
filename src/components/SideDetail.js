import React from 'react';
import PokeDetail from './PokeDetail';

const Loading = () => {
   return (
      <div style={loading}>
         <h1>Loading...</h1>
      </div>
   )
}

const SideDetail = ({ isOpen, pokemon, onCloseDetail, onNextPokemon, onPrevPokemon, isLoading }) => {
   return (
      <div className={`side-up${isOpen ? ' is-active' : ''}`}>
         <button className="btn btn-left" onClick={ ()=> onPrevPokemon()}>&larr;</button>
         <button className="btn btn-right" onClick={ ()=> onNextPokemon()}>&rarr;</button>
         <PokeDetail pokemon={pokemon} onCloseDetail={onCloseDetail} />
         {isLoading ? Loading() : null}
      </div>
   );
}

const loading = {
   position: 'absolute',
   top: 0,
   backgroundColor: '#ffffffb0',
   width: '100%',
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center'
}

export default SideDetail;