 import ProductItem from "./ProductItem"
 import data from "./data"
import { Fragment } from "react"

function Products(){
const productElements = data.data.map(product=>{
   return <ProductItem data={product} key={Math.random()} />
})

    return(
        <Fragment>
        <div className="product-items-container" >
            {productElements}
        </div>
]        </Fragment>
    )
}

export default Products