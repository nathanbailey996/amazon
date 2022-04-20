import Link from "next/link"
import { useRouter } from "next/router"

function DealOfTheDay (){

    const router = useRouter()

    const showDetailsHandler = ()=>{
        router.push("/" + 77543)
        }
    return(
        <div className="deal-container" onClick={showDetailsHandler}>
            <p style={{color:"darkslategrey", fontWeight:"300", fontSize:"1.3rem"}}>Deal of the day</p>
            <div className="deal-img-container">
                <img src="/oral-b.png" alt=""/>
            </div>
            <div className="price-container">
                <p>£<span>21</span>99 <span style={{padding:"0 0.3rem", fontSize:"1.4rem"}}> - </span>£<span>159</span>99</p>
            </div>

            <Link href="/">See more</Link>
        </div>
    )
}

export default DealOfTheDay 