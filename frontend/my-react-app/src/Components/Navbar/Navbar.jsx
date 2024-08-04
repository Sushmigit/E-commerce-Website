import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png';
const Navbar = () => {

  //usestate to dynamically move the red line under the shop
  const[menu,setMenu] = useState("Shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
     <div className='nav-logo'>
        <img src={logo} alt="" className="small-logo"></img>
        <p>Shopper</p>
     </div>
     <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
     <ul   ref={menuRef}  className='nav-menu'>
      
      <li onClick={()=>{setMenu("shop")}}><Link to='/' className='link'>Home</Link>{menu === "shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link to='/mens' className='link'>Mens</Link>{menu === "mens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><Link to='/womens' className='link'>Womens</Link>{menu === "womens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link to='/kids' className='link'>Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
     
     </ul>
     <div className="nav-login-cart">
      {localStorage.getItem('auth-token')
      ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :
      <Link to='/login' className='link'><button>Login</button></Link>}
      <Link to='/cart' className='link'><img src={cart_icon} alt="" /></Link>
      <div className="nav-cart-count">
      {getTotalCartItems()}
      </div>
     </div>
    </div>
  )
}

export default Navbar