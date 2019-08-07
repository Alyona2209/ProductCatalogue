import React from 'react';
import '../styles/App.sass';
import {SearchBar} from "./SearchBar";
import {ProductCatalogue} from "./ProductCatalogue";


export class FilterableCatalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    });
  };

  render() {
    return (
        <div className="catalogue">
          <SearchBar
              filterText = {this.state.filterText}
              onFilterTextChange = {this.handleFilterTextChange}
          />
          <ProductCatalogue
              products = {this.props.products}
              filterText = {this.state.filterText}
          />
        </div>
    );
  }
}



