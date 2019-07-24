import * as React from "react";

export class ProductBox extends React.Component {

    render() {
        const product = this.props.product;

        return (
            <div className='productBox' tabIndex='10'>
                <img src={product.imageSrc} alt={product.name}/>
                <p className='productName'> {product.name}</p>
                <p>{product.price}</p>
            </div>
        );
    }
}