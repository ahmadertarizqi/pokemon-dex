import React from 'react';
import * as api from '../api/pokemon';

const RootContext = React.createContext();

export class Provider extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         pokemons: [],
         page: 1,
         limit: 40,
         isLoading: false
      }
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
   
   render() {
      const reducer = {
         state: this.state,
         getPokemons: this.getPokemons.bind(this),
         loadMorePokemon: this.loadMorePokemons.bind(this)
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