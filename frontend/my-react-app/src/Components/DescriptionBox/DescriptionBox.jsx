import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box-fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
        <p>An ecommerce website is an online platform where businesses sell products or 
            services directly to consumers. It allows users to browse items, make purchases, 
            and manage orders through a digital interface. </p>
        <p>Features typically include product catalogs, shopping carts, secure payment gateways, 
            and customer service options. Ecommerce websites provide convenience, accessibility, 
            and a wider reach for both businesses and consumers.</p>
        </div>
    </div>
  )
}

export default DescriptionBox