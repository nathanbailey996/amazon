function Image (props){
    return(
        <div style={{width:"100vw", height:"12vh", padding:"0.3rem 0", backgroundColor:"lightgrey"}}>
            <img src={props.image} alt="" style={{width:"100%", height:"100%", backgroundSize:"cover"}} />


        </div>
    )
}

export default Image 