import React,{useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';

export const Cart = () => {
  const {cartItems}=useContext(ShopContext);
  return (
    <div className='cart'>
      <div>
        Your cart items
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id]!==0){
            return<CartItem data={Product}/>
          }
      })}
      </div>
    </div>
  )
}
