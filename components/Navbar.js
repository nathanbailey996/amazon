import React, { Fragment } from "react"
import Link from "next/link"
import { MdMenu } from "react-icons/md"
import { BsCart3, BsSearch } from "react-icons/bs"
import HamburgerMenu from "./HamburgerMenu"
import {useState} from "react"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { useRouter } from "next/router"
import { auth } from "./firebase"



function Navbar(props){
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [searchValue, setSearchValue] = useState("")

const router = useRouter()
function redirectToCart(){
    router.push("/cart")
}

function handleRedirect(){
    router.push("/sign-in")
}
function redirectToProducts(e){
    e.preventDefault()
    setSearchValue("")
    router.push("/products")

}




function handleAuthentication(){
    auth.signOut()
}

    return (
        <Fragment>
        <nav className="navbar">

            <div className="top-navbar-container">
            <div className="left-icons-container">
                <button className="transparent-btn" onClick={(e)=>{
                    e.preventDefault()
                    setIsMenuOpen(prevValue=>!prevValue)
                }}>
                <MdMenu size="2em" color="white" />
                </button>
            <div className="navbar-logo-container">
               <img alt="" src="/logo-amazon.png" className="navbar-logo"/>
            </div>
            </div>

            <div className="search-bar-container search-bar-container-large-screen">
                <form className="input-container" onSubmit={redirectToProducts}>
                <input type="text" placeholder="Search Amazon.co.uk" value={searchValue}  onChange={(e)=>{
                    setSearchValue(e.target.value)
                }}/>
               <button className="search-btn"> <BsSearch color="#051d2a" size="0.9em"  className="search-icon"/></button> 
                  </form>

            </div>

<div className="right-icons-container">
    <div className="account-icons-container">
{props.state.user? <div onClick={handleAuthentication} style={{cursor:"pointer"}}>
    <p className="navbar-user">Hello, {props.state.user?.email}</p>
    <p className="navbar-user-sign">Sign Out</p>
</div>: <div onClick={handleRedirect} style={{cursor:"pointer"}}>
    <p className="navbar-user">hello, Guest</p>
    <p className="navbar-user-sign">Sign In</p>
    </div>}

<BsCart3 color="white" size="1.5em" style={{marginLeft:"1rem"}} onClick={redirectToCart}/>
{props.state.cartCount>= 1 && <p style={{color:"orange", marginRight:"1rem"}}>{props.state.cartCount}</p>}
    </div>

</div>

            </div>

            <div className="search-bar-container">
                <form className="input-container" onSubmit={redirectToProducts}>
                <input type="text" placeholder="Search Amazon.co.uk" value={searchValue} onChange={(e)=>{
                    setSearchValue(e.target.value)
                }}/>
               <button className="search-btn"><BsSearch color="#051d2a" size="0.9em"  className="search-icon"/></button>
                  </form>

            </div>

            <div className="bottom-navbar-container">
                <ul className="navbar-menu">
                    <li><Link href="/">Electronics</Link></li>
                    <li><Link href="/">Amazon Basics</Link></li>
                    <li><Link href="/">Buy Again</Link></li>
                    <li><Link href="/">Deals</Link></li>
                    <li><Link href="/">Prime</Link></li>
                    <li><Link href="/">Best Sellers</Link></li>
                    <li><Link href="/">Books</Link></li>
                    <li><Link href="/">Gift Cards</Link></li>
                    <li><Link href="/">New Releases</Link></li>
                    <li><Link href="/">Home & Garden</Link></li>
                    <li><Link href="/">PC</Link></li>
                    <li><Link href="/">Music</Link></li>
                </ul>
            </div>

            <div className="location-container">
            <HiOutlineLocationMarker size="1.1em" />
                <p>Deliver to Nathan - Tullagher X91 </p>
            </div>

        </nav>

            <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} key={Math.random()}/>
        </Fragment>
    )
}

export default Navbar 