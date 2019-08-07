import * as React from "react";

export class ProductBox extends React.Component {

    handleClick = () => {
        let product = this.props.product;
        this.props.onClick(product);
    };

    render() {
        const product = this.props.product;

        return (
            <div className='productBox' tabIndex='10' onClick = {this.handleClick}>
                <img src={product.imageSrc} alt={product.name}/>
                <p className='productName'> {product.name}</p>
                <p>{product.price}</p>
            </div>
        );
    }
}