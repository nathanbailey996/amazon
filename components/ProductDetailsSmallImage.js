function ProductDetailsSmallImage(props){
    return(
        <img src={props.address} className="small-details-image" alt="" onMouseOver={()=>{
            props.setImageNumber(props.id)
        }}/>
    )

}

export default  ProductDetailsSmallImage