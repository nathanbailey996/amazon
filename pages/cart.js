import CartPage from "../components/CartPage"

function cart (props){
    return(
        <div className="cart-container">
           <CartPage key={Math.random()}/>
        </div>
    )
}

export default cart 