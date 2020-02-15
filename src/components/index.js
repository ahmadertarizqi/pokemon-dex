import React, { Component } from 'react';
import api from '../api/pokemon';

import SearchBar from './SearchBar';
import PokeList from './PokeList';
import SideDetail from './SideDetail';

import '../styles/main.scss';

class App extends Component {
   state = {
      pokemons: [],
      pokemonSelected: null,
      search: '',
      limit: 28,
      page: 1,
      isOpen: false,
      isLoading: false,
   }

   componentDidMount() {
      this.loadPokemon();
   }

   loadPokemon = () => {
      const { page, limit } = this.state;
      const offset = page - 1;

      api.getPokemons(pokemon => {
         this.setState({ pokemons: pokemon.data.results });
      }, error => {
         console.log(error);
      }, 1500, offset, limit);
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
         }, 1000, offset, limit)
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
      }, null, name);
   }

   onNextPokemon = () => {
      const next = this.state.pokemonSelected.id + 1;
      this.setState({ isLoading: true }, () => {
         api.getPokemonDetail(pokemon => {
            this.setState({ pokemonSelected: pokemon.data, isLoading: false });
         }, error => {
            console.log(error);
         }, 500, next);
      });
   }

   onPrevPokemon = () => {
      const prev = this.state.pokemonSelected.id - 1;
      this.setState({ isLoading: true }, () => {
         api.getPokemonDetail(pokemon => {
            this.setState({ pokemonSelected: pokemon.data, isLoading: false });
         }, error => {
            console.log(error);
         }, 500, prev);
      });
   }

   onCloseDetail = () => {
      document.body.style.overflow = 'initial';
      this.setState({
         pokemonSelected: false,
         isOpen: false
      });
   }

   searchHandleChange = (ev) => {
      this.setState({ search: ev.target.value });
   }

   render() {
      let filterPokemon = this.state.pokemons.filter(pokemon => {
         return pokemon.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      });

      return (
         <div className="container">
            <div className="header">
               <h2 className="title-page">Pokedex</h2>
               <h3>Total Pokemons : {this.state.pokemons.filter(pokemon => pokemon.name).length}</h3>
               <SearchBar
                  search={this.state.search}
                  onSearchInput={this.searchHandleChange}
               />
            </div>
            {!this.state.pokemons.length  ?
               <div className="retrieve-data">Retrieve Pokemon...</div>
               :
               <PokeList
                  pokemons={filterPokemon}
                  clickDetail={this.onGetDetail}
                  isLoading={this.state.isLoading}
                  loadMorePokemon={this.loadMorePokemon}
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