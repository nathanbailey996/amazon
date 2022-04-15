import ProductDetailsComponent from "../components/ProductDetails"

import data  from "../components/data" 

function ProductDetails (props){


    return(
        <ProductDetailsComponent details={props.productDetail} />
    )
}




 export  function getStaticProps(context){
    const productId = context.params.productId

    let currentProduct = []

    for(let i = 0; i< data.data.length; i++){
        const currentId = data.data[i]
        currentId.id.toString() === productId.toString()? currentProduct.push(currentId): ""
        }

    return{
        props:{
           productDetail:currentProduct[0]
        }, revalidate:1, 
    }


}

export function getStaticPaths (){

    return{
        fallback:false,
        paths: data.data.map(product=>({
            params:{
                productId:product.id.toString()
            }
        }))
    }
}




export default ProductDetails 