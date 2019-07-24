import React from 'react';
import '../styles/App.sass';
import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";

export const PRODUCTS = [
  {name: 'Платье Арт. 111', imageSrc: 'src/assets/images/dress1-small.jpg', price: '270 BYN', inStock: true,
    description: 'Романтичное платье Х-силуэта из фактурной костюмной ткани длиной миди.'},
  {name: 'Платье Арт. 112', imageSrc: '/assets/images/dress2-small.jpg', price: '298 BYN', inStock: true,
    description: 'Романтичное платье Х-силуэта с фигурной линией низа и кулиской на талии.'},
  {name: 'Платье Арт. 113', imageSrc: './assets/images/dress3-small.jpg', price: '91 BYN', inStock: true,
    description: 'Блузка прямого силуэта из легкой вискозной ткани с дизайнерским принтом. '},
  {name: 'Платье Арт. 114', imageSrc: './assets/images/dress4-small.jpg', price: '65 BYN', inStock: true,
    description: 'Элегантная блузка из хлопковой ткани с длинными рукавами и манжетами'},
  {name: 'Платье Арт. 115', imageSrc: './assets/images/dress5-small.jpg', price: '154 BYN', inStock: true,
    description: 'Широкие прямые брюки с кармашками по бокам из фактурной вискозной ткани.'},
  {name: 'Платье Арт. 116', imageSrc: './assets/images/dress6-small.jpg', price: '225 BYN', inStock: true,
    description: 'Элегантный комбинезон с брюками 7/8 со стрелками из фактурной стрейчевой ткани.'}
];

export class FilteredCatalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
        <div>
          <SearchBar
              filterText={this.state.filterText}
              onFilterTextChange={this.handleFilterTextChange}
          />
          <ProductTable
              products={this.props.products}
              filterText={this.state.filterText}
          />
        </div>
    );
  }
}



