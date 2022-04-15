import { TiTick } from "react-icons/ti"
function Reviews(){
    return(
        <div className="reviews-container">
            {/* <div className="stars-container" style={{display:"flex"}}>
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
                <p>50</p>
            </div> */}
            <div className="product-sescription">
                <p>Shure AONIC Free True Wireless Earbuds, Soud Isolationg Wireless Bluetooth Earphones, 21-HR Battery...</p>
            </div>

            <div className="prime-container">
            <p className="product-price">£49.99</p>
            <TiTick color="#FF9900"/>
            <p className="prime">Prime</p>
            </div>
        </div>
    )
}

export default Reviews 