import CartItem from "./CartItem";
import productData from "./data"
import { useState, useReducer } from "react"
import { useContext } from 'react'
import { appContext} from "../pages/_app"
import Subtotal from "./Subtotal";
import Link from "next/link"

function CartPage(){
    const cartContext = useContext(appContext)



const cartElements = cartContext.state.productData.map(product=>{
    return product.amount >= 1? 
    <CartItem 
    image={product.image}
    title={product.title}
    amount={product.amount}
    firstPrice={product.firstPrice}
    lastPrice={product.lastPrice}
    id={product.id}
    basketItem={true}
    />: ""
})

const savedForLaterElements = cartContext.state.savedForLater.map(product=>{
    return <CartItem 
    image={product.image}
    title={product.title}
    amount={product.amount}
    firstPrice={product.firstPrice}
    lastPrice={product.lastPrice}
    id={product.id}
    key={Math.random()}
    />
})



    return(
        
        <div className="cart-page-container">
            <div className="cart-page-section-container">
                
         <div>
             <div style={{backgroundColor:"white", padding:"1rem", borderBottom:"solid lightgrey 1px",}}>
                 <p>Hello, {cartContext.state.user? cartContext.state.user?.email: "Guest"}</p>
         <h3>Your shopping Basket</h3>
         </div>
           {cartElements}
           </div>
           {cartContext.state.isCartCount0 && 
           <div className="empty-cart-container">
           <p>Your cart is empty</p>
           <Link href="/">Continue Shopping</Link>
           </div>
           }
              {!cartContext.state.isCartCount0 && <Subtotal key={Math.random()}/>}
              </div>
              {cartContext.state.savedForLater.length >= 1 && <div className="empty-cart-container" style={{marginTop:"2rem", display:"block", padding:"0"}}>
                  <p style={{marginBottom:"0.5rem"}}>Saved for Later</p>
                  <div>
                  {savedForLaterElements}
                  </div>
              </div>} 
             
        </div>
   
       
    )
}

export default CartPage