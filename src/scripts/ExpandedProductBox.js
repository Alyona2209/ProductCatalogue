import * as React from "react";

export class ExpandedProductBox extends React.Component {

    getProdInfo(product) {
        if (product.hasOwnProperty('key')) {
            return product.props.product;
        }
        return product;
    }

    handleClick = (e) => {
        let filteredProducts = this.props.filteredProducts,
            openProduct = this.getProdInfo(this.props.product);

        if (e.target.closest('button')) {
            let button = e.target.closest('button');
            let curIndex = filteredProducts.findIndex((product, index) => {
                product = this.getProdInfo(product);
                if (product === openProduct) {
                    return index.toString();
                }
            });

            if (button.name === 'left' && curIndex !== 0) {
                this.props.onClick(filteredProducts[curIndex - 1]);
            } else if (button.name === 'right' && curIndex !== filteredProducts.length - 1){
                this.props.onClick(filteredProducts[curIndex + 1]);
            }

        } else if (e.target.closest('.coverLayer')) {
            this.props.onClick();
        }

    };

    render() {
        let product = this.getProdInfo(this.props.product);

        return (
            <div className='coverLayer' onClick={this.handleClick}>
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
}