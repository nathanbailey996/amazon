import Link from "next/link"
import { useRouter } from "next/router"

function HomeCard (props){
    const router = useRouter()

    const showDetailsHandler = ()=>{
        router.push("/" + props.id)
        }
    return(
        <div className="home-card" onClick={showDetailsHandler}>
            <p>{props.title}</p>
            <img src={props.image} alt=""/>
           </div>
    )
}

export default HomeCard 