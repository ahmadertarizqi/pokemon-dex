import React from 'react';
import * as api from '../api/pokemon';

const RootContext = React.createContext();

export class Provider extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         pokemons: [],
         page: 1,
         limit: 40
      }
   }

   getPokemons = async () => {
      const { page, limit } = this.state;
      const offset = page - 1;
      try {
         const response = await api.getPokemons(offset, limit);
         this.setState({ pokemons: response.data.results }, () => console.log(this.state.pokemons));   
      } catch (error) {
         console.log(`error load pokemon : ${error}`);
      }
   }
   
   render() {
      const reducer = {
         state: this.state,
         dispatch: {
            getPokemons: this.getPokemons
         }
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