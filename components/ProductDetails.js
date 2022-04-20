import Link from "next/link"
import { appContext } from "../pages/_app"
import { useContext, useState, useEffect } from "react"
import { useRouter } from "next/router"
import DetailImageCircle from "./DetailImageCircle"
import ProductDetailsSmallImage from "./ProductDetailsSmallImage"
import MobileImageSlider from "./MobileImageSlider"

function ProductDetails (props){
const [touchStartPosition, setTouchStartPosition] = useState('')
const [imageNumber, setImageNumber] = useState(1)


useEffect(()=>{
    window.addEventListener("dragstart", (e)=>e.preventDefault())
    window.addEventListener("touchstart", (event)=> setTouchStartPosition(event.touches[0].pageX))
})

    const router = useRouter()
const productDetailsContext = useContext(appContext)

const addToBasketHandler = (id)=>{
    productDetailsContext.dispatch({type:"Add", id:id})
    productDetailsContext.dispatch({type:"getTotalPrice"})
router.push("/cart")
}

const NextImageHandler = ()=>{
    if(imageNumber < props.details.detailImages.length){
        setImageNumber(imageNumber +1)
    }}

    const previousImageHandler = ()=>{
        if(imageNumber > 1){
            setImageNumber(imageNumber -1)

        }
    }


const handleTouch = (event)=>{
    const currentTouchPosition = event.touches[0].pageX
     currentTouchPosition > touchStartPosition? NextImageHandler(): previousImageHandler()


}

const mainImage = props.details.detailImages.map(image=>{
   return image.id === imageNumber? <img src={image.address} alt="" onTouchMove={handleTouch}/>: ""
})
const ImageSlider = props.details.detailImages.map(image=>{
    return <ProductDetailsSmallImage address={image.address} id={image.id} setImageNumber={setImageNumber}/>
})





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
<div className="small-images-container">
    {ImageSlider}
</div>

    <div className="product__image__container" >
{/* <img src={props.details.detailsImage? props.details.detailsImage:  props.details.image} alt=""/> */}
{mainImage}

</div>
<div className="mobile-image-slider" >
{props.details.detailImages.map(image=>{
  return  <DetailImageCircle imageNumber={imageNumber} id={image.id} setImageNumber={setImageNumber}/>
})}
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