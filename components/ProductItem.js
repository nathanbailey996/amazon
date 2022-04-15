import Link from "next/link"
import {  useRouter} from "next/router"
 

function ProductItem({data}){
const router = useRouter()

const handleRedirect = ()=>{
    router.push("/" + data.id)
}

    return(
        <div className="product-item" onClick={handleRedirect}>
        <img src={data.image}alt="" />  
        <div className="product-item-description-container">
            <p>{data.title}</p>
               <div className="reviews" style={{display:"flex", fontSize:"0.8rem"}}>{data.reviews.map(star=>{
                    return <p key={Math.random()}>⭐</p>
                })}
                <Link href="/">{"("+data.reviewsAmount+")"}</Link>
                </div>
                <div className="price-container product-price" style={{margin:"0.2rem 0"}}>
             <p style={{color:"black", fontSize:"0.8rem"}}>£<span style={{fontSize:"1.2rem" }}>{data.firstPrice}</span> {data.lastPrice}</p>
               </div>

            </div>  

        </div>
    )
}

export default ProductItem