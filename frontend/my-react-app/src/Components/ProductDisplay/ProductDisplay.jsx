
import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
//import all_product from '../Components/Assets/all_product';
import remove_icon from '../Assets/cart_cross_icon.png';
import CartItems from '../CartItems/CartItems';
const ProductDisplay = (props) => {
    const { product } = props;
    const{all_product} = useContext(ShopContext);
    const {addToCart} = useContext(ShopContext);
    const {cartItems} = useContext(ShopContext);
    //const cartItems = cart;
    const {removeFromCart} = useContext(ShopContext);
    const handleAddToCart = (id) => {
        
        const cartSection = document.getElementById('cart-items');
       
            cartSection.scrollIntoView({ behavior: 'auto' });
        
    };
    return (
        <>
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, close fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-options">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <button onClick={()=>{handleAddToCart(product.id)}}>SEE CART</button>
                <p className='productdisplay-right-category'><span>Category:</span> Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Category:</span> Modern, Latest</p>
            </div>
        </div>


       

</>
    );
}

export default ProductDisplay;
