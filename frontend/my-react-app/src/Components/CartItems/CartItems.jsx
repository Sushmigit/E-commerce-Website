
import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';

import remove_icon from '../Assets/cart_cross_icon.png';
const CartItems = (props) => {
    const {product} =props;
    const {all_product}= useContext(ShopContext);
    const {cartItems} = useContext(ShopContext);
    //const cartItems = cart;
    const {removeFromCart} = useContext(ShopContext);
    const {getTotalCartAmount} = useContext(ShopContext);
    console.log(cartItems);
  return (
    <div className='cartitems' id="cart-items">
         <h1 className='carthead'>Your Cart</h1>
         <div className="hr-wrapper">
         <hr className="centered-hr" />
         </div>
    <div className="cartitems-format-main">
       
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr />
    
       { all_product.map((e,index)=>{
            if(cartItems[e.id] > 0)
            {
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src = {e.image}  alt=""  className='carticon-producticon'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className="cartitems-removeicon" src={remove_icon} alt=""  onClick={()=>{removeFromCart(e.id)}}/>
                   <hr />
                </div>
            </div>
            }
            return null;
        })
        }
            
           <div className="cartitems-down">
            <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>SubTotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Fee</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
               <div className="cartitems-promobox">
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
               </div>
            </div>
           </div>


       
    </div>
  )
}

export default CartItems;
/*function CartItems({ all_product, cartItems, removeFromCart }) {
    return (
        <div>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format">
                                <img src={e.image} alt="" className='carticon-producticon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} alt="" onClick={() => removeFromCart(e.id)} />
                                <hr />
                            </div>
                        </div>
                    );
                }
                return null; // Return null if the condition is not met
            })}
        </div>
    );
}

export default CartItems;*/