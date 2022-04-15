// import Home from "../pages"
import Reviews from "./Reviews"
 import { useRouter } from "next/router"

function HomePageProduct(){
    const router = useRouter()

    const showDetailsHandler = ()=>{
        router.push("/" + 987764563)
        }
    return(
        <div className="home-product-container" onClick={showDetailsHandler}>
        <div className="home-product">
            <img src="/aonic-earbuds.png" alt=""/>
            <Reviews key={Math.random()}/>
            </div>
        </div>
    )
}

export default HomePageProduct 