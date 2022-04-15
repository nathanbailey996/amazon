import ProductDisplay from "./ProductDisplay"
import Link from "next/link"
import { useRouter } from "next/router"



function ProductDisplayContainer (props){

    const router = useRouter()
    function handleRouter (){
        props.id? router.push("/" + props.id): ""
    }


    return(
        <div className="product-display-container" onClick={handleRouter}>
               <p style={{fontSize:"1.3rem", padding:"0.5rem", width:"100%"}}>{props.title}</p>
{props.image? <div style={{width:"100%"}} className="product-display-link">
    <img src={props.image} style={{width:"100%", height:"70%", margin:"0 auto", marginBottom:"0.5rem"}} alt=""/>
    <Link href={"/" + props.id} >See more</Link>
    </div>
     :<div>         
            <div style={{display:"flex"}}>
            <ProductDisplay image={props.image1} description={props.description1} width={props.width} id={props.id1} key={Math.random()}/>
            <ProductDisplay image={props.image2} description={props.description2} width={props.width} id={props.id2} key={Math.random()}/>
            </div>

            <div style={{display:"flex"}}>
            <ProductDisplay image={props.image3} description={props.description3} width={props.width} id={props.id3} key={Math.random()}/>
            <ProductDisplay image={props.image4} description={props.description4} width={props.width} id={props.id4} key={Math.random()}/>

            </div>
{props.path && <Link href={props.path}>{props.linkText? props.linkText : "See more"}</Link>}
</div>}
        </div>
    )
}

export default ProductDisplayContainer 