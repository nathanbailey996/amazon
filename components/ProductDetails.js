import Link from "next/link"
import { appContext } from "../pages/_app"
import { useContext } from "react"
import { useRouter } from "next/router"

function ProductDetails (props){
    const router = useRouter()
const productDetailsContext = useContext(appContext)

const addToBasketHandler = (id)=>{
    productDetailsContext.dispatch({type:"Add", id:id})
    productDetailsContext.dispatch({type:"getTotalPrice"})
router.push("/cart")
}
    return(
        <div className="product-details-container">
            <div className="product-details-left-content-container" style={{width:"max-content"}}>
            <div className="title-container" >
                <h6 style={{maxWidth:"90vw"}} className="product-details-title">{props.details.title}</h6>
                <div className="reviews" style={{display:"flex"}}>{props.details.reviews.map(star=>{
                    return <p key={Math.random()}>⭐</p>
                })}
                <Link href="/">{"("+props.details.reviewsAmount+")"}</Link>
                </div>
<div className="amazons-choice-container">
    <p>Amazon's<span> Choice</span></p>
</div>

<div className="product-details-img-container" >
    <div className="product__image__container">
<img src={props.details.detailsImage? props.details.detailsImage:  props.details.image} alt=""/>
</div>

</div>
</div>



</div>

<div className="product-details-right-content-container">
<div className="price-container product-price">
<p>£<span>{props.details.firstPrice}</span> {props.details.lastPrice}</p>
</div>
<div className="basket-buttons-container">
    <p style={{color:props.details.availability? "green": "red", fontSize:"1.15rem"}}>{props.details.availability? "In Stock": "Out of Stock"}</p>
    <p>quantity</p>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <button className="basket-btn" onClick={()=>{
        addToBasketHandler(props.details.id)
    }}>Add to Basket</button>
    <button className="basket-btn" style={{backgroundColor:"#FF9900"}}>Buy Now</button>
    </div>
</div>



<div className="product-details-description-container">
    <div style={{width:"100%"}}>
    <h6 style={{fontSize:"1.2rem"}}>About this item</h6>
   </div>
   <ul>
       {props.details.description.map(description=>{
           return <li key={description}>{description}</li>
       })}
   </ul>
</div>
</div>
        </div>
    )
}

export default ProductDetails 