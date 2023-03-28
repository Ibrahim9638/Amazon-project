import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';



const Product = (props) => {
    const {img, name, price, seller, ratings}=props.product;
    const handleCartProduct = props.handleCartProduct; 
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Start</p>
            </div>
            <button className='btn-cart' onClick={ ()=> handleCartProduct(props.product)}>
                Add to Cart
                 <FontAwesomeIcon icon= {faShoppingCart}  style={{color:'red'}}/>
                </button>

        </div>
    );
};

export default Product;