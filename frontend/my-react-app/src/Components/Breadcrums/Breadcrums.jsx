
/*import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
  const { product } = props;
// Ensure product is defined and has the properties you want to use
const category = product ? product.category : 'Category Not Available';
const name = product ? product.name : 'Product Not Available';

  console.log(product); // Log product to ensure it's being passed correctly

  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums;*/
import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
  const { product } = props;

  // Ensure product is defined and has the properties you want to use
  const category = product ? product.category : 'Category Not Available';
  const name = product ? product.name : 'Product Not Available';

  console.log(product); // Log product to ensure it's being passed correctly

  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {category} <img src={arrow_icon} alt="" /> {name}
    </div>
  )
}

export default Breadcrums;
