import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    useEffect(()=>{
        const storeCart = getShoppingCart();
        let saveCart = [];
            // Step 1: get id
        for(const id in storeCart){
            // Step 2: get the product using id
            const addedProduct = products.find(product=> product.id === id);
            if(addedProduct){
                // Step 3: add quantity
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                // Step 4 : added the product in save cart
                saveCart.push(addedProduct);
            }
            }
            // set the saveCart
            setCart(saveCart);
            
        },[products]);

    const handleCartProduct = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
        
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>   
                {
                  products.map(product => <Product 
                    key = {product.id}
                    product = {product}
                    handleCartProduct = {handleCartProduct}
                    ></Product>)
                }
            </div>
            <div className='order-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;