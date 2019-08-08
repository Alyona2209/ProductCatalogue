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
            this.setState((state) => {
                openProduct: undefined
            });
        }
    }

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
            <div className='productTable'>
                {filteredProducts}
                {this.state.openProduct &&
                    <ExpandedProductBox
                        product={this.state.openProduct}
                        filteredProducts={filteredProducts}
                        onClick={this.setOpenProduct.bind(this)}
                    />
                }
            </div>
        );
    }
}