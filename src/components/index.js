import React, { Component } from 'react';
import { withAppContext } from '../store/withAppContext';

import FilterBar from './FilterBar';
import PokeList from './PokeList';
import SideDetail from './SideDetail';

import '../styles/main.scss';

class App extends Component {
   state = {
      search: '',
      pokemonCategory: 'all',
      filtered: []
   }

   componentDidMount() {
      this.props.context.getPokemons();
   }

   onGetDetail = (name) => {
      document.body.style.overflow = 'hidden';
      this.props.context.getPokemonDetail(name);
   }

   onNextPokemon = () => {
      const next = this.props.context.state.pokemonSelected.id + 1;
      this.props.context.onNextPrevPokemon(next, 'next');
   }

   onPrevPokemon = () => {
      const pokemonSelected = this.props.context.state.pokemonSelected.id;
      if(pokemonSelected > 1) {
         const prev = pokemonSelected - 1;
         this.props.context.onNextPrevPokemon(prev, 'prev');
      } else {
         alert('Sorry, this is the first pokemon');
      }
   }

   onCloseDetail = () => {
      document.body.style.overflow = 'initial';
      this.props.context.closePokemonDetail();
   }

   selectByType = (ev) => {
      this.setState({ pokemonCategory: ev.target.value });
      if(ev.target.value === 'all') {
         this.props.context.getPokemons();
      } else {
         this.props.context.getPokemonType(ev.target.value);
      }
   }

   searchHandleChange = (ev) => {
      console.log(ev.target.value);
   }

   render() {
      // console.log(this.props, 'test');
      const { context } = this.props;

      return (
         <div className="container">
            <div className="header">
               <h2 className="title-page">Pokedex</h2>
               <h3>Total Pokemons : {context.state.pokemons.length}</h3>
               <FilterBar
                  search={this.state.search}
                  searchHandle={this.searchHandleChange}
                  pokemonCategory={this.state.pokemonCategory}
                  selectByType={this.selectByType}
                  onSearchSubmit={this.onSearchSubmit}
               />
            </div>
            {!context.state.pokemons.length || context.state.isLoading ?
               <div className="retrieve-data">Loading Pokemon...</div>
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
               isOpen={context.state.isOpen}
               pokemon={context.state.pokemonSelected}
               onCloseDetail={this.onCloseDetail}
               onNextPokemon={this.onNextPokemon}
               onPrevPokemon={this.onPrevPokemon}
               isLoading={context.state.isLoading}
            />
            <div className="overlay" onClick={this.onCloseDetail}></div>
         </div>
      )
   }
}

export default withAppContext(App);