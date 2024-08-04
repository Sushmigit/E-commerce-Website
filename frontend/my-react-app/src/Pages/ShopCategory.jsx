import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>
            Showing 1-12
          </span>
          out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{ //individual item,index
        //In the all_product.js file we have category attribute using that we can display the images categorywise
           if(props.category === item.category)
           {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
           //Item jsx to display the items 
          }
          else
          {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  ) 
}

export default ShopCategory
//Header and footer is given in app.js so it'll be visible in all the categories
//But mainpage is wrapped within shop so it'll not be visisble in all the pages
/* This defines a functional component named ShopCategory. It takes props as an argument, which allows you to pass data from a parent component to this component.
useContext is a React hook that allows you to use context in functional components. */
//we'll get the props from app.js