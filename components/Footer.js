import Link from "next/link"
import { BsGlobe } from "react-icons/bs"
import { MdArrowDropUp } from "react-icons/md"
import { auth } from "./firebase"
import { useRouter } from "next/router"

function Footer(props){
    const router = useRouter()

    function handleSignOut(){
auth.signOut()
router.push("/")
}


    return(
        <footer className="footer">
            <div className="back-top-top-container" onClick={()=>{
                    window.scrollTo({
                        top: 0, 
                        behavior: 'smooth'
                    })
                }}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}} >
            <MdArrowDropUp size="1.7em" />
                <p>TOP OF PAGE</p>
                </div>
            </div>

            <div className="main-footer-content-container">
            <ul className="footer-menu">
                <li><h6>Your Account</h6></li>
                <li><Link href="/">Nathan's Amazon.co.uk</Link></li>
                <li><Link href="/">Download the Amazon App</Link></li>
                <li><Link href="/">Find a List or Registry</Link></li>
                <li><Link href="/">Your Subscribe & Save Items</Link></li>
                <li><Link href="/">Your Orders</Link></li>
                <li><Link href="/">Your Lists</Link></li>
                <li><Link href="/">Find a Gift</Link></li>
                <li><Link href="/">Your Recently Viewed Items</Link></li>
                <li><Link href="/">Sell on Amazon</Link></li>
                <li><Link href="/">Recycling</Link></li>
                <li><Link href="/">Help</Link></li>
            </ul>
            <ul className="footer-menu">
                <li><h6>Get to know us</h6></li>
                <li><Link href="/">Careers</Link></li>
                <li><Link href="/">About us</Link></li>
                <li><Link href="/">UK Modern Slavery Statement</Link></li>
                <li><Link href="/">Sustainability</Link></li>
                <li><Link href="/">Amazon Science</Link></li>
            </ul>

           <ul className="footer-menu third-footer-menu">
            <li><h6>Make Money with Us</h6></li>
                <li><Link href="/">Sell on Amazon</Link></li>
                <li><Link href="/">Sell on Amazon Business</Link></li>
                <li><Link href="/">Sell on Amazon Handmade</Link></li>
                <li><Link href="/">Sell on Amazon Launchpad</Link></li>
                <li><Link href="/">Associates Programme</Link></li>
                <li><Link href="/">Fulfilment by Amazon</Link></li>
                <li><Link href="/">Seller Fulfilled Prime</Link></li>
                <li><Link href="/">Advertise Your Products</Link></li>
                <li><Link href="/">Independently Publish with Us</Link></li>
                <li><Link href="/">Amazon Pay</Link></li>
                <li><Link href="/">Host an Amazon Hub</Link></li>
                <li><Link href="/">›See More Make Money with Us</Link></li>
            </ul>
            </div>
            <div className="bottom-footer-container">

                <ul className="bottom-footer-menu">
                    <li> <BsGlobe color="white" style={{marginRight:"0.3rem",opacity:"0.7"}}/> <Link href="/"> English</Link></li>
                    <li><span style={{color:"white",opacity:"0.7", paddingRight:"0.3rem"}}>£</span><Link href="/"> GBP - Pounds</Link></li>
                    <li><Link href="/">🇬🇧 United Kingdom</Link></li>
                </ul>
                <ul className="bottom-submenu">
                    <li><Link href="/sign-in">Switch Accounts</Link></li>
                    <li onClick={handleSignOut}><Link href="/">Sign Out</Link></li>
                </ul>

                <div className="small-print-container">
                    <ul>
                        <li><Link href="/">Conditions of Use</Link></li>
                        <li><Link href="/">Privacy Notice</Link></li>
                        <li><Link href="/">Cookies Notice</Link></li>
                        <li><Link href="/">Interest-Based Ads Notice</Link></li>
                    </ul>
                    <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer 