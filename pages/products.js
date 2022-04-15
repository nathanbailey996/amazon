import Products from "../components/Products"

function products (){
    return(
        <div className="products-section">
            <Products key={Math.random()}/>
        </div>
    )
}
export default products