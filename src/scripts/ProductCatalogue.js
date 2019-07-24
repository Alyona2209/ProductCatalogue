import * as React from "react";
import {ProductBox} from "./ProductBox";
import {ExpandedProductBox} from "./ExpandedProductBox";

export class ProductTable extends React.Component {

    /*handleClick = (e) => {
        let box = e.target.closest('.productBox');
        if (box) {
            this.props.onClick(box.querySelector("h1").innerHTML);
        }
    };*/

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