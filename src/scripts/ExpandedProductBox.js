import * as React from "react";

export class ExpandedProductBox extends React.Component {

    render() {
        const product = this.props.product;

        if (product) {
            return (
                <div className='coverLayer'>
                    <button name='left'><img src={'images/icons/arrow_left.png'} alt='left'/></button>
                    <div className='expProductBox' tabIndex='1'>
                        <h1> {product.name}</h1>
                        <img src={product.imageSrc.replace('small', 'large')} alt={product.name}/>
                        <p>{product.description}</p>
                        <p className = 'price'> {product.price} </p>
                        <p className = 'inStock'> {product.inStock ? 'В наличии' : 'Под заказ'} </p>
                    </div>
                    <button name='right'><img src={'images/icons/arrow_right.png'} alt='right'/></button>
                </div>
            );
        }
        return null;

    }
}