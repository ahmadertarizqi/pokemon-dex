(this["webpackJsonppokemon-dex"]=this["webpackJsonppokemon-dex"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),s=a.n(r),c=a(3),l=a(4),i=a(6),m=a(5),u=a(7),p=a(8),d=a(1),h=a.n(d),k=a(19),v=a.n(k);function f(e){var t,a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={headers:{"Content-Type":"application/json"}},n.prev=1,n.next=4,h.a.awrap(v.a.get("https://pokeapi.co/api/v2"+e,t));case 4:return a=n.sent,n.abrupt("return",a);case 8:return n.prev=8,n.t0=n.catch(1),console.log("fetchData error : "+n.t0),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),null,null,[[1,8]])}function g(e,t){var a,n;return h.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a="/pokemon/?offset=".concat(e,"&limit=").concat(t),o.next=3,h.a.awrap(f(a));case 3:return n=o.sent,o.abrupt("return",n);case 5:case"end":return o.stop()}}))}function y(e){var t,a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/pokemon/".concat(e),n.next=3,h.a.awrap(f(t));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}))}function E(e){var t,a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/type/".concat(e),n.next=3,h.a.awrap(f(t));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}))}var b=o.a.createContext(),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={pokemons:[],page:1,limit:40,isLoading:!1,isOpen:!1,pokemonSelected:null},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getPokemons",value:function(){var e,t,a,n,o;return h.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=this.state,t=e.page,a=e.limit,n=t-1,r.prev=2,r.next=5,h.a.awrap(g(n,a));case 5:o=r.sent,this.setState({pokemons:o.data.results}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),console.log("error load pokemon : ".concat(r.t0));case 12:case"end":return r.stop()}}),null,this,[[2,9]])}},{key:"loadMorePokemons",value:function(){var e,t,a,n,o,r;return h.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=this.state,t=e.page,a=e.limit,n=e.pokemons,o=t*a,this.setState({isLoading:!0}),s.next=5,h.a.awrap(g(o,a));case 5:r=s.sent,this.setState({pokemons:[].concat(Object(p.a)(n),Object(p.a)(r.data.results)),page:t+1,isLoading:!1});case 7:case"end":return s.stop()}}),null,this)}},{key:"onGetPokemonDetail",value:function(e){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(y(e));case 2:t=a.sent,this.setState({pokemonSelected:t.data,isOpen:!0});case 4:case"end":return a.stop()}}),null,this)}},{key:"onClosePokemonDetail",value:function(){this.setState({pokemonSelected:null,isOpen:!1})}},{key:"onNextPrevPokemon",value:function(e,t){var a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.setState({isLoading:!0}),"prev"!==t){n.next=7;break}return n.next=4,h.a.awrap(y(e));case 4:a=n.sent,n.next=11;break;case 7:if("next"!==t){n.next=11;break}return n.next=10,h.a.awrap(y(e));case 10:a=n.sent;case 11:this.setState({pokemonSelected:a.data,isLoading:!1});case 12:case"end":return n.stop()}}),null,this)}},{key:"getPokemonType",value:function(e){var t,a,n;return h.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return this.setState({isLoading:!0}),o.next=3,h.a.awrap(E(e));case 3:t=o.sent,a=t.data.pokemon,n=[],a.forEach((function(e){var t={name:e.pokemon.name,url:e.pokemon.url};n.push(t)})),this.setState({pokemons:n,isLoading:!1});case 8:case"end":return o.stop()}}),null,this)}},{key:"render",value:function(){var e={state:this.state,getPokemons:this.getPokemons.bind(this),getPokemonDetail:this.onGetPokemonDetail.bind(this),closePokemonDetail:this.onClosePokemonDetail.bind(this),loadMorePokemon:this.loadMorePokemons.bind(this),onNextPrevPokemon:this.onNextPrevPokemon.bind(this),getPokemonType:this.getPokemonType.bind(this)};return o.a.createElement(b.Provider,{value:e},this.props.children)}}]),t}(o.a.Component);var P,N=["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","unknown","shadow"],w=function(e){var t=e.pokemonCategory,a=e.selectByType,n=(e.search,e.searchHandle),r=e.onSearchSubmit;return o.a.createElement("form",{className:"toolbar-wrap",onSubmit:r},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"columns lg-4 sm-12"},o.a.createElement("div",{className:"field"},o.a.createElement("select",{className:"input-select",value:t,onChange:a},o.a.createElement("option",{value:"all"},"--All Type Pokemons--"),N.map((function(e,t){return o.a.createElement("option",{key:t,value:e},e.toString())}))))),o.a.createElement("div",{className:"columns lg-8 sm-12"},o.a.createElement("div",{className:"field"},o.a.createElement("input",{type:"text",className:"input",placeholder:"Search by Name Pokemon",onChange:n}),o.a.createElement("button",{type:"submit",className:"btn-search"},o.a.createElement("svg",{className:"svg-icon",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"})))))))},C=function(e){return e.match(/\/(pokemon)\/(\d+)/)[2]},S=function(e){var t=e.pokemon,a=e.clickDetail;return o.a.createElement("div",{className:"columns lg-3 sm-6"},o.a.createElement("div",{className:"poke-item",onClick:function(){return a(C(t.url))}},o.a.createElement("div",{className:"image"},o.a.createElement("img",{src:"".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+C(t.url),".png"),alt:"".concat(t.name)})),o.a.createElement("div",{className:"content"},o.a.createElement("h2",{className:"name"},t.name))))},D=function(e){var t=e.pokemons,a=e.clickDetail,n=e.isLoading,r=e.loadMorePokemon,s=e.search,c=e.pokemonCategory;return o.a.createElement("div",{className:"row",style:{paddingTop:"15rem"}},t.map((function(e,t){return o.a.createElement(S,{key:t,pokemon:e,clickDetail:a})})),""!==s||"all"!==c?null:o.a.createElement("div",{className:"columns lg-12 sm-12"},o.a.createElement("button",{className:"btn-more",disabled:n,onClick:r},n?"Fetching Pokemon...":"Load More Pokemon")))},O=function(e){var t=e.pokemon,a=e.onCloseDetail;return t?o.a.createElement("div",{className:"poke-detail"},o.a.createElement("div",{className:"poke-detail__header"},o.a.createElement("span",{className:"close-detail",onClick:function(){return a()}},"\xd7"),o.a.createElement("h2",null,"Pokemon Detail")),o.a.createElement("div",{className:"poke-detail__body"},o.a.createElement("div",{className:"profile__wrapper"},o.a.createElement("div",{className:"images"},o.a.createElement("img",{src:t.sprites.front_default,alt:t.name}),o.a.createElement("img",{src:t.sprites.back_default,alt:t.name})),o.a.createElement("div",{className:"profile"},o.a.createElement("h2",{style:{textTransform:"capitalize"}},t.name),o.a.createElement("div",{className:"type"},t.types.map((function(e,t){return o.a.createElement("span",{key:t,className:"label-type ".concat(e.type.name)},e.type.name)}))),o.a.createElement("div",{className:"height"},"Height : ",o.a.createElement("strong",null,t.height," M")),o.a.createElement("div",{className:"weight"},"Weight : ",o.a.createElement("strong",null,t.weight," Kg")),o.a.createElement("div",{className:"abilities"},"Abilities : ",o.a.createElement("strong",null,t.abilities.map((function(e,t){return e.ability.name})).toString())))),o.a.createElement("h1",{style:{marginBottom:15}},"Stats"),t.stats.reverse().map((function(e,t){return o.a.createElement(L,{key:t,name:e.stat.name,stat:e.base_stat,maxStat:"300"})})))):o.a.createElement("div",null)},L=function(e){var t,a,n=e.name,r=e.stat,s=e.maxStat;return o.a.createElement("div",{className:"graph"},o.a.createElement("div",{className:"name"},o.a.createElement("strong",null,n," ",o.a.createElement("b",null,":")," ")),o.a.createElement("div",{className:"bar"},o.a.createElement("span",{className:"bar-number"},r),o.a.createElement("div",{className:"bar-value",style:{width:(t=r,a=s,Math.ceil(Math.min(t/a*100,100))+"%")}})))},j={position:"absolute",top:0,backgroundColor:"#ffffffb0",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},M=function(e){var t=e.isOpen,a=e.pokemon,n=e.onCloseDetail,r=e.onNextPokemon,s=e.onPrevPokemon,c=e.isLoading;return o.a.createElement("div",{className:"side-up".concat(t?" is-active":"")},o.a.createElement("button",{className:"btn btn-left",onClick:function(){return s()}},"\u2190"),o.a.createElement("button",{className:"btn btn-right",onClick:function(){return r()}},"\u2192"),o.a.createElement(O,{pokemon:a,onCloseDetail:n}),c?o.a.createElement("div",{style:j},o.a.createElement("h1",null,"Loading...")):null)},T=(a(44),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",pokemonCategory:"all",filtered:[]},a.onGetDetail=function(e){document.body.style.overflow="hidden",a.props.context.getPokemonDetail(e)},a.onNextPokemon=function(){var e=a.props.context.state.pokemonSelected.id+1;a.props.context.onNextPrevPokemon(e,"next")},a.onPrevPokemon=function(){var e=a.props.context.state.pokemonSelected.id;if(e>1){var t=e-1;a.props.context.onNextPrevPokemon(t,"prev")}else alert("Sorry, this is the first pokemon")},a.onCloseDetail=function(){document.body.style.overflow="initial",a.props.context.closePokemonDetail()},a.selectByType=function(e){a.setState({pokemonCategory:e.target.value}),"all"===e.target.value?a.props.context.getPokemons():a.props.context.getPokemonType(e.target.value)},a.searchHandleChange=function(e){a.setState({search:e.target.value})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.context.getPokemons()}},{key:"render",value:function(){var e=this,t=this.props.context,a=t.state.pokemons.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.state.search.toLowerCase())}));return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header"},o.a.createElement("h2",{className:"title-page"},"Pokedex"),o.a.createElement("h3",null,"Total Pokemons : ",t.state.pokemons.length),o.a.createElement(w,{search:this.state.search,searchHandle:this.searchHandleChange,pokemonCategory:this.state.pokemonCategory,selectByType:this.selectByType,onSearchSubmit:this.onSearchSubmit})),t.state.pokemons.length?o.a.createElement(D,{pokemons:a,clickDetail:this.onGetDetail,isLoading:t.state.isLoading,loadMorePokemon:t.loadMorePokemon,search:this.state.search,pokemonCategory:this.state.pokemonCategory}):o.a.createElement("div",{className:"retrieve-data"},"Loading Pokemon..."),o.a.createElement(M,{isOpen:t.state.isOpen,pokemon:t.state.pokemonSelected,onCloseDetail:this.onCloseDetail,onNextPokemon:this.onNextPokemon,onPrevPokemon:this.onPrevPokemon,isLoading:t.state.isLoading}),o.a.createElement("div",{className:"overlay",onClick:this.onCloseDetail}))}}]),t}(n.Component)),_=(P=T,function(e){return o.a.createElement(b.Consumer,null,(function(t){return o.a.createElement(P,Object.assign({},e,{context:t}))}))});s.a.render(o.a.createElement(x,null,o.a.createElement(_,null)),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.47007166.chunk.js.map