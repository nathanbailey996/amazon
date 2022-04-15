import { useContext } from "react"
import { appContext } from "../pages/_app"

function Subtotal (){
    const subtotalContext = useContext(appContext)

    return(
        <div className="subtotal-container">

            <p style={{fontSize:"1.1rem", padding:"0.5rem 0"}}>Subtotal: <span style={{fontSize:"1.3rem"}}>£{subtotalContext.state.cartTotal}</span></p>
            <button className="basket-btn">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal 