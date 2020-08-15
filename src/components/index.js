import React, { Component } from 'react';
import * as api from '../api/pokemon';

import FilterBar from './FilterBar';
import PokeList from './PokeList';
import SideDetail from './SideDetail';

import RootContext from '../context';

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

   static contextType = RootContext;

   componentDidMount() {
      const context = this.context;
      context.getPokemons();
   }

   onGetDetail = async (name) => {
      document.body.style.overflow = 'hidden';
      const response = await api.getPokemonDetail(name);
      this.setState({
         pokemonSelected: response.data,
         isOpen: true,
      });
   }

   onNextPokemon = async () => {
      const next = this.state.pokemonSelected.id + 1;
      this.setState({ isLoading: true });

      const response = await api.getPokemonDetail(next);
      this.setState({
         pokemonSelected: response.data,
         isLoading: false
      });
   }

   onPrevPokemon = async () => {
      const prev = this.state.pokemonSelected.id - 1;
      this.setState({ isLoading: true });

      const response = await api.getPokemonDetail(prev);
      this.setState({
         pokemonSelected: response.data,
         isLoading: false
      });
   }

   onCloseDetail = () => {
      document.body.style.overflow = 'initial';
      this.setState({
         pokemonSelected: false,
         isOpen: false
      });
   }

   selectHandleChange = async (ev) => {
      this.setState({ pokemonCategory: ev.target.value });

      if(this.state.pokemonCategory === 'all') {
         this.loadPokemon();
      } else {
         try {
            const response = await api.getPokemonType(this.state.pokemonCategory);
            this.setState({ pokemons: response.data.pokemon });
         } catch (error) {
            console.log(error);            
         }
      }
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
      const context = this.context;
      console.log(context);

      return (
         <div className="container">
            <div className="header">
               <h2 className="title-page">Pokedex</h2>
               <h3>Total Pokemons : {context.state.pokemons.length}</h3>
               <FilterBar
                  search={this.state.search}
                  searchHandle={this.searchHandleChange}
                  pokemonCategory={this.state.pokemonCategory}
                  selectHandleChange={this.selectHandleChange}
                  onSearchSubmit={this.onSearchSubmit}
               />
            </div>
            {!context.state.pokemons.length ?
               <div className="retrieve-data">Retrieve Pokemon...</div>
               :
               <PokeList
                  pokemons={context.state.pokemons}
                  clickDetail={this.onGetDetail}
                  isLoading={context.state.isLoading}
                  loadMorePokemon={context.loadMorePokemon}
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
      )
   }
}

export default App;