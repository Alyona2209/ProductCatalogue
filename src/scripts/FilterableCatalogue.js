import React from 'react';
import '../styles/App.sass';
import {SearchBar} from "./SearchBar";
import {ProductCatalogue} from "./ProductCatalogue";
import {ExpandedProductBox} from "./ExpandedProductBox";


export class FilterableCatalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      openProduct: undefined
    };
  }

  setOpenProduct (product) {
      if (product) {
          this.setState({
              openProduct: product
          });
      } else {
          this.setState({
              openProduct: undefined
          });
      }
  }

  handleClick = (e) => {
    if (e.target.closest('.productBox')) {
      let productName = e.target.closest('.productBox').querySelector("p").innerText;
      let product = this.props.products.find((product) => {
         return product.name === productName;
      });
      this.setOpenProduct(product);

    } else if (e.target.closest('button')) {
        let button = e.target.closest('button'),
            curIndex = this.props.products.indexOf(this.state.openProduct);

        if (button.name === 'left' && curIndex !== 0) {
            this.setOpenProduct(this.props.products[curIndex - 1]);
        } else if (button.name === 'right' && curIndex !== this.props.products.length - 1){
            this.setOpenProduct(this.props.products[curIndex + 1]);
        }

    } else if (e.target.closest('.coverLayer')) {
        this.setOpenProduct();
    }
  };

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    });
  };

  render() {
    return (
        <div className="catalogue" onClick = {this.handleClick}>
          <SearchBar
              filterText = {this.state.filterText}
              onFilterTextChange = {this.handleFilterTextChange}
          />
          <ProductCatalogue
              products = {this.props.products}
              filterText = {this.state.filterText}
          />
          <ExpandedProductBox
              product = {this.state.openProduct}
          />
        </div>
    );
  }
}



