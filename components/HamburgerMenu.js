import { Fragment } from "react";
import { BsPersonCircle, } from "react-icons/bs"
import { AiOutlineHome , AiOutlineClose} from "react-icons/ai"
import Link from "next/link"


 function HamburgerMenu (props){
const showMenu = {
    transform: props.isMenuOpen? "" : "translateX(-5000px)"
}

     return(
         <div className="hamburger-container" style={showMenu}>
             <div className="mobile-menu-container">
                 <div style={{backgroundColor:"#06273a", color:"white"}}>
                 <div className="mobile-user-container">
                     <p>Nathan's account</p>
                     <BsPersonCircle color="white" size="1.2em"/>
                     </div>

                 <div className="browse-amazon-container" style={{paddingLeft:"1rem", paddingBottom:"1rem"}}>
                     <h6>Browse</h6>
                     <p>Amazon</p>
                     </div>
                     </div>    
               <div className="amazon-home-container">
                   <Link href="/"><h6>Amazon Home</h6></Link>
                   <AiOutlineHome color="black" size="1.2em"/>
                   </div>  
                <div className="mobile-menu-list">
                    <h6>Trending</h6>
                   <ul>
                       <li><Link href="/">Best Sellers</Link></li>
                       <li><Link href="/">New Releases</Link></li>
                       <li><Link href="/">Movers and Shakers</Link></li>
                   </ul>
                    </div> 


                <div className="mobile-menu-list">
                    <h6>Trending</h6>
                   <ul>
                       <li><Link href="/">Health & Personal Care</Link></li>
                       <li><Link href="/">Home & Kitchen</Link></li>
                       <li><Link href="/">Grocery & Gourmet Foods</Link></li>
                       <li><Link href="/">Sports & Outdoors</Link></li>
                       <li><Link href="/">See All Departments</Link></li>
                   </ul>
                    </div> 


                <div className="mobile-menu-list">
                    <h6>Trending</h6>
                   <ul>
                       <li><Link href="/">Today's Deals</Link></li>
                       <li><Link href="/">Try Prime</Link></li>
                       <li><Link href="/">Prime Video</Link></li>
                       <li><Link href="/">See All Programs & Features</Link></li>
                   </ul>
                    </div> 



             </div >
             <div className="close-btn-container">
                </div>
                <AiOutlineClose size="1.5em" color="white" className="close-btn" onClick={()=>{
                    props.setIsMenuOpen(prevValue=>!prevValue)
                }}/>
         </div>
     )
 }

 export default HamburgerMenu 