import * as React from "react";
import {ProductBox} from "./ProductBox";
import {ExpandedProductBox} from "./ExpandedProductBox";

export class ProductCatalogue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openProduct: undefined
        };
    }

    setOpenProduct (product) {
        if (product) {
            this.setState((state) => {
                return {openProduct: product}
            });
        } else {
            this.setState({
                openProduct: undefined
            });
        }
    }

    handleClick = (e) => {
        if (e.target.closest('button')) {
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

    render() {
        const filterText = this.props.filterText,
              filteredProducts = [];

        this.props.products.forEach((product) => {
            if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }

            filteredProducts.push(
                <ProductBox
                    product={product}
                    key={product.name}
                    onClick={this.setOpenProduct.bind(this)}
                />
            );
        });

        return (
            <div className='productTable'  onClick = {this.handleClick}>
                {filteredProducts}
                <ExpandedProductBox
                    product = {this.state.openProduct}
                />
            </div>
        );
    }
}