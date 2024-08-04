
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import CartItems from '../Components/CartItems/CartItems';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); // to get the product id from all_product
  const product = all_product.find((e) => e.id === Number(productId));
  
  console.log(product); // Log product to ensure it's not undefined or null

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
      <div id='cart-items'>
      <CartItems product={product}/>
      </div>
    </div>
  )
}

export default Product;
