import { RiDeleteBin7Line } from "react-icons/ri"
import { HiPlus } from "react-icons/hi"
import Link from "next/link"
import { useContext } from 'react'
import { appContext} from "../pages/_app"

function CartItem (props){
    const cartContext = useContext(appContext)






const addHandler = (id, AddOrMinus)=>{
cartContext.dispatch({type:AddOrMinus, id:id})
cartContext.dispatch({type:"getTotalPrice"})
}

    return(
        <div className="cart-item-section-container">
        <div className="cart-item-container" onClick={showDetailsHandler}>
            <div className="cart-item-upper-section-container">
            <div className="cart-item-img-container">
            <img src={props.image} alt="product" />
            </div>

            <div className="cart-item-title-container">
                <p className="cart-item-title">{props.title}</p>

                <div className="price-container product-price" style={{margin:"0.2rem 0"}}>
             <p style={{color:"black", fontSize:"0.8rem"}}>£<span style={{fontSize:"1.2rem" }}>{props.firstPrice}</span> {props.lastPrice}</p>
               </div>
               <p style={{color:"grey", fontSize:"0.8rem", padding:"0.3rem 0"}}>Eligible for FREE Shipping</p>
               <p style={{color:"green", fontSize:"0.8rem"}}>In Stock</p>
            </div>
            </div>
            <div className="cart-item-lower-section-container">
               {props.basketItem && <div className="cart-item-buttons-container">
                    <button className="cart-item-btn" style={{borderRadius:"4px 0 0 4px"}} onClick={()=>{
                        addHandler(props.id, "Minus")
                      }}><RiDeleteBin7Line /></button>

                    <div className="cart-item-btn-number" >
                        <p>{props.amount}</p>
                    </div>
                    <button className="cart-item-btn" style={{borderRadius:"0 4px 4px 0"}} onClick={()=>{
                        addHandler(props.id, "Add")
                      }}><HiPlus /></button>
                </div> }

{props.basketItem &&<div>
                <button className="button" style={{marginRight:"1rem"}} onClick={()=>{
                        addHandler(props.id, "Delete")
                      }}>Delete</button>
                <button className="button" onClick={()=>{
                    addHandler(props.id, "Save")
                }}>Save for later</button>
                </div>}
                <div>
               {!props.basketItem &&  <button className="button" onClick={()=>{
                   addHandler(props.id, "Add")
                    addHandler(props.id, "Move")
                }}>Move To Basket</button>}
                </div>
            </div>
            <div className="see-more-container">
                <Link href="/">See more like this</Link>
            </div>
            </div>

        </div>
    )
}

export default CartItem 