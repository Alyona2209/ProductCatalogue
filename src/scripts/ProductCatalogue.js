import * as React from "react";
import {ProductBox} from "./ProductBox";

export class ProductCatalogue extends React.Component {

    render() {
        const filterText = this.props.filterText;
        const filteredProducts = [];

        this.props.products.forEach((product) => {
            if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }

            filteredProducts.push(
                <ProductBox
                    product={product}
                    key={product.name}
                />
            );
        });

        return (
            <div className='productTable'>
                {filteredProducts}
            </div>
        );
    }
}