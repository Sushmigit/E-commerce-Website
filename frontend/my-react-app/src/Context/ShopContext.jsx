
import React, { createContext, useState, useEffect } from 'react';
//import all_product from '../Components/Assets/all_product'
import CartItems from '../Components/CartItems/CartItems';
export const ShopContext = createContext();
// Helper function to initialize cart
const getDefaultCart = () => {
    let cart = {};
    /*for (let product of all_product) {
        cart[product.id] = 0;
    }*/
   for(let index = 0;index<300+1;index++)
   {
    cart[index] = 0;
   }
    return cart;
};
const ShopContextProvider = ({ children }) => {

    const [all_product,setAll_Product] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:4000/allproducts')
      .then((response)=>response.json())
      .then((data)=>setAll_Product(data))

      if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/getcart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:"",
        })
        .then((response)=>response.json())
        .then((data)=>setCartItems(data));
      }
    },[])
    const [cartItems, setCartItems] = useState(getDefaultCart());
const addToCart = (id) => {
        setCartItems(prevItems => ({
            ...prevItems,
            [id]: (prevItems[id] || 0) + 1
        }));

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    "itemId":id
                })
               
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
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
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    "itemId":id
                })
               
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    };

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = all_product.find((product)=> product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
   console.log(cartItems);
   console.log(all_product);
   return (
    <ShopContext.Provider value={{ getTotalCartItems,getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart }}>
        {children}
     
    </ShopContext.Provider>
);
};
export default ShopContextProvider;
/*import React, { createContext } from 'react';
import useCartState from '../Pages/State';


export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const { all_product, cartItems, addToCart, removeFromCart } = useCartState();

    return (
        <ShopContext.Provider value={{ all_product, cartItems, addToCart, removeFromCart }}>
            {children}
        </ShopContext.Provider>
    );
};
/*import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';


export const ShopContext = createContext(null);

export const getDefaultCart = () => {
    let cart = {};
    for (let index = 0;index< all_product.length+1;index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId)=>{
       setCartItems((prev)=>({...prev,[itemId]:(prev[itemId]||0)+1}));
       console.log(cartItems);
    }
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const contextValue = {all_product , cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;*/


