import React, { Component } from 'react';
import api from '../api/pokemon';

import FilterBar from './FilterBar';
import PokeList from './PokeList';
import SideDetail from './SideDetail';

import '../styles/main.scss';

class App extends Component {
   state = {
      pokemons: [],
      pokemonSelected: null,
      search: '',
      limit: 40,
      page: 1,
      isOpen: false,
      isLoading: false,
      pokemonCategory: 'all',
      filtered: []
   }

   componentDidMount() {
<<<<<<< HEAD
      this.loadPokemon();
   }

   loadPokemon = () => {
      const { page, limit } = this.state;
      const offset = page - 1;

      api.getPokemons(pokemon => {
         this.setState({ pokemons: pokemon.data.results });
      }, error => {
         console.log(error);
      }, offset, limit);
=======
      const context = this.context;
      context.dispatch.getPokemons();
>>>>>>> parent of bc5b335... simplify call
   }

   loadMorePokemon = () => {
      const { page, limit, pokemons } = this.state;
      const offset = page * limit;

      this.setState({ isLoading: true }, () => {
         api.getPokemons(pokemon => {
            this.setState({
               pokemons: [...pokemons, ...pokemon.data.results],
               page: page + 1,
               isLoading: false
            });
         }, error => {
            console.log(error);
         }, offset, limit)
      });
   }

   onGetDetail = (name) => {
      document.body.style.overflow = 'hidden';
      api.getPokemonDetail(pokemon => {
         this.setState({
            pokemonSelected: pokemon.data,
            isOpen: true,
         });
      }, error => {
         console.log(error)
      }, name);
   }

   onNextPokemon = () => {
      const next = this.state.pokemonSelected.id + 1;
      this.setState({ isLoading: true }, () => {
         api.getPokemonDetail(pokemon => {
            this.setState({ pokemonSelected: pokemon.data, isLoading: false });
         }, error => {
            console.log(error);
         }, next);
      });
   }

   onPrevPokemon = () => {
      const prev = this.state.pokemonSelected.id - 1;
      this.setState({ isLoading: true }, () => {
         api.getPokemonDetail(pokemon => {
            this.setState({ pokemonSelected: pokemon.data, isLoading: false });
         }, error => {
            console.log(error);
         }, prev);
      });
   }

   onCloseDetail = () => {
      document.body.style.overflow = 'initial';
      this.setState({
         pokemonSelected: false,
         isOpen: false
      });
   }

   selectHandleChange = (ev) => {
      this.setState({
         pokemonCategory: ev.target.value
      }, () => {
         if(this.state.pokemonCategory === 'all') {
            this.loadPokemon();
         } else {
            api.getPokemonType(({ data : { pokemon } }) => {
               this.setState({
                  pokemons: pokemon
               }, () => console.log('from select', this.state.pokemons));
            }, error => {
               console.log(error);
            }, this.state.pokemonCategory);
         }
      });
   }

   searchHandleChange = (ev) => {
      console.log(ev.target.value);

      // // hold original version of the list
      // let currentList = [];

      // // hold the filtered list before putting into state
      // let newList = [];

      // if(ev.target.value !== '') {
      //    currentList = this.state.pokemons;

      //    newList = currentList.filter(item => {
      //       const lc = item.name.toLowerCase();
      //       const filter = ev.target.value.toLowerCase();
      //       return lc.includes(filter);
      //    });
      // } else {
      //    newList = this.state.pokemons;
      // }

      // this.setState({ 
      //    filtered: newList 
      // });
   }

   render() {
      const { pokemons } = this.state;
      return (
         <div className="container">
            <div className="header">
               <h2 className="title-page">Pokedex</h2>
               <h3>Total Pokemons : {pokemons.length}</h3>
               <FilterBar
                  search={this.state.search}
                  searchHandle={this.searchHandleChange}
                  pokemonCategory={this.state.pokemonCategory}
                  selectHandleChange={this.selectHandleChange}
                  onSearchSubmit={this.onSearchSubmit}
               />
            </div>
            {!pokemons.length ?
               <div className="retrieve-data">Retrieve Pokemon...</div>
               :
               <PokeList
                  pokemons={this.state.pokemons}
                  clickDetail={this.onGetDetail}
                  isLoading={this.state.isLoading}
                  loadMorePokemon={this.loadMorePokemon}
                  search={this.state.search}
                  pokemonCategory={this.state.pokemonCategory}
               />
            }
            <SideDetail
               isOpen={this.state.isOpen}
               pokemon={this.state.pokemonSelected}
               onCloseDetail={this.onCloseDetail}
               onNextPokemon={this.onNextPokemon}
               onPrevPokemon={this.onPrevPokemon}
               isLoading={this.state.isLoading}
            />
            <div className="overlay" onClick={this.onCloseDetail}></div>
         </div>
      );
   }
}

export default App;