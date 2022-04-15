import { useRouter } from "next/router"

function ProductDisplay(props){
    const router = useRouter()
    const showDetailsHandler = ()=>{
        router.push("/" + props.id)
    }

    return(

        <div className="product-display" onClick={showDetailsHandler}>

            <img src={props.image} className="display-img" style={{width: props.width? props.width: ""}} alt=""/>
            <p style={{fontSize:"0.8rem", paddingBottom:"0.5rem"}}>{props.description}</p>
        </div>
    )
}

export default ProductDisplay 