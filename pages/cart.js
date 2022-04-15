import CartPage from "../components/CartPage"

function cart (props){
    return(
        <div className="cart-container">
           <CartPage key={Math.random()}/>
        </div>
    )
}

// export async function getServerSideProps(context){
//     console.log(context.req.cookies)
//     return{
//         props:{
//             chicken:"chicken"
//         }
//     }
// }


export default cart 