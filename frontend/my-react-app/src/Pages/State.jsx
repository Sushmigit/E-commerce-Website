// state.js
import { useState, useEffect } from 'react';
import all_product from '../Components/Assets/all_product';

// Helper function to initialize cart
const getDefaultCart = () => {
    let cart = {};
    for (let product of all_product) {
        cart[product.id] = 0;
    }
    return cart;
};

const useCartState = () => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (id) => {
        setCartItems(prevItems => ({
            ...prevItems,
            [id]: (prevItems[id] || 0) + 1
        }));
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => {
            const newItems = { ...prevItems };
            if (newItems[id] > 1) {
                newItems[id] -= 1;
            } else {
                delete newItems[id];
            }
            return newItems;
        });
    };
   console.log('cart-Items',cartItems);
    return {
        all_product,
        cartItems,
        addToCart,
        removeFromCart
        
    };
};

export default useCartState;
