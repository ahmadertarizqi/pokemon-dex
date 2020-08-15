import React from 'react';
import * as api from '../api/pokemon';

const RootContext = React.createContext();

export class Provider extends React.Component {
   state = {
      pokemons: [],
      page: 1,
      limit: 40,
      isLoading: false,
      isOpen: false,
      pokemonSelected: null
   }

   async getPokemons() {
      const { page, limit } = this.state;
      const offset = page - 1;
      try {
         const response = await api.getPokemons(offset, limit);
         this.setState({ pokemons: response.data.results });   
      } catch (error) {
         console.log(`error load pokemon : ${error}`);
      }
   }

   async loadMorePokemons() {
      const { page, limit, pokemons } = this.state;
      const offset = page * limit;
      
      this.setState({ isLoading: true });
      const response = await api.getPokemons(offset, limit);
      this.setState({
         pokemons: [...pokemons, ...response.data.results],
         page: page + 1,
         isLoading: false
      });
   }

   async onGetPokemonDetail(name) {
      const response = await api.getPokemonDetail(name);
      this.setState({
         pokemonSelected: response.data,
         isOpen: true
      });
   }

   onClosePokemonDetail() {
      this.setState({ pokemonSelected: null, isOpen: false });
   }

   async onNextPrevPokemon(id, btn) {
      this.setState({ isLoading: true });
      let response;
      if(btn === 'prev') {
         response = await api.getPokemonDetail(id);
      } else if (btn === 'next') {
         response = await api.getPokemonDetail(id);
      }
      
      this.setState({ 
         pokemonSelected: response.data, 
         isLoading: false 
      });
   }

   async getPokemonType(type) {
      const response = await api.getPokemonType(type);
      this.setState({
         pokemons: response.data.pokemon
      });
   }
   
   render() {
      const reducer = {
         state: this.state,
         getPokemons: this.getPokemons.bind(this),
         getPokemonDetail: this.onGetPokemonDetail.bind(this),
         closePokemonDetail: this.onClosePokemonDetail.bind(this),
         loadMorePokemon: this.loadMorePokemons.bind(this),
         onNextPrevPokemon: this.onNextPrevPokemon.bind(this),
         getPokemonType: this.getPokemonType.bind(this)
      }

      return (
         <RootContext.Provider value={reducer}>
            {this.props.children}
         </RootContext.Provider>
      )
   }
}

// export const Consumer = RootContext.Consumer;
export default RootContext;