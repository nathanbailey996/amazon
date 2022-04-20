function DetailImageCircle (props){
const color = props.imageNumber === props.id? "grey": "lightgrey"

    return(
        <div style={{width:"1rem", height:"1rem", borderRadius:"0.5rem", margin:"0.5rem", backgroundColor:color, cursor:"pointer"}} onClick={()=>{
            props.setImageNumber(props.id)
        }}></div>
    )
}

export default DetailImageCircle