import React from 'react';
import * as api from '../api/pokemon';
import { setIdFromURL } from '../utils';

const RootContext = React.createContext();

export class Provider extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         pokemons: [],
         pokemon: {}
      }
   }

   componentDidMount() {
      this.fetchPokemonData();
   }
   
   fetchPokemonData = () => {
      api.getPokemons(pokemon => {
         let arrPokemon = [];
         pokemon.data.results.map(item => {
            arrPokemon.push({
               name: item.name,
               id: setIdFromURL(item.url)
            });
            return item;
         });
         // console.log('uwaw', arrPokemon);
         this.setState({ pokemon: arrPokemon }, () => console.log(this.state.pokemon));
      });
   }
   
   render() {
      return (
         <RootContext.Provider value={this.state}>
            {this.props.children}
         </RootContext.Provider>
      )
   }
}

export const Consumer = RootContext.Consumer;