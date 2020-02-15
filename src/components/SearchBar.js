import React from 'react';

class SearchBar extends React.Component {
   render() {
      return (
         <div className="field">
            <input type="text" className="input" placeholder="Search by Name Pokemon"
               value={this.props.search}
               onChange={this.props.onSearchInput}
            />
         </div>
      );
   }
}

export default SearchBar;
