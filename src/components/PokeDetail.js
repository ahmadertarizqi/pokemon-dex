import React from 'react';
import { convertStats } from '../utils'

const PokeDetail = ({ pokemon, onCloseDetail }) => {

   if (!pokemon) {
      return (
         <div></div>
      )
   }

   return (
      <div className="poke-detail">
         <div className="poke-detail__header">
            <span className="close-detail" onClick={() => onCloseDetail()}>&times;</span>
            <h2>Pokemon Detail</h2>
         </div>
         <div className="poke-detail__body">
            <div className="profile__wrapper">
               <div className="images">
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <img src={pokemon.sprites.back_default} alt={pokemon.name} />
               </div>
               <div className="profile">
                  <h2 style={{textTransform: 'capitalize'}}>{pokemon.name}</h2>
                  <div className="type">
                     {pokemon.types.map((t, idx) => (
                        <span key={idx} className={`label-type ${t.type.name}`}>{t.type.name}</span>
                     ))}
                  </div>
                  <div className="height">Height : <strong>{pokemon.height} M</strong></div>
                  <div className="weight">Weight : <strong>{pokemon.weight} Kg</strong></div>
                  <div className="abilities">
                     Abilities : <strong>{pokemon.abilities.map((abil, idx) => abil.ability.name).toString()}</strong>
                  </div>
               </div>
            </div>
            <h1 style={{marginBottom: 15}}>Stats</h1>
            {pokemon.stats.reverse().map((s, idx) => (
               <StatsChart key={idx} name={s.stat.name} stat={s.base_stat} maxStat="300"/>
            ))}
         </div>
      </div>
   );
}

export default PokeDetail;

const StatsChart = ({ name, stat, maxStat }) => {
   return (
      <div className="graph">
         <div className="name"><strong>{name} <b>:</b> </strong></div>
         <div className="bar">
            <span className="bar-number">{stat}</span>
            <div className="bar-value" style={{ width: convertStats(stat, maxStat) + '%' }}></div>
         </div>
      </div>
   );
}