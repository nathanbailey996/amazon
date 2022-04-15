import Link from "next/link"
import { useState } from "react"
import AccountFooter from "./AccountFooter.js"
import { useRouter } from "next/router"
import {  auth} from "./firebase"
// import Image from "next/image"


function Account (){
const [personalData, setPersonalData] = useState({
    email:"", 
    password:"", 
})
const router = useRouter()

const handleRidirect = ()=>{
router.push("/")
}

function handleSubmit (e){
    e.preventDefault()
    auth.signInWithEmailAndPassword(personalData.email, personalData.password)
    .then((auth)=>{
        handleRidirect()
    })
    .catch(error=>alert(error.message))
}

    return(
        <div className="account-section">
            {/* <Image 
            src="/account-amazon-logo-image.png"
            className="account-img"
            width={200}
            height={75}
            style={{marginTop:"1rem"}} 
            onClick={handleRidirect}
            alt=""
            /> */}
          <img src="/account-amazon-logo-image.png" className="account-img" style={{marginTop:"1rem"}} onClick={handleRidirect}/>
            <form className="form" onSubmit={handleSubmit}>
                <legend>Sign In</legend>
                <label htmlFor="email">Email or mobile phone number</label>
                <input type="email" id="email" value={personalData.email} name="email" className="account-input" onChange={(e)=>{
                    setPersonalData({
                        ...personalData, 
                        email:e.target.value
                    })
                }}/>

                <label htmlFor="password">Password</label>
                <input type="text" id="password" value={personalData.password} name="password" className="account-input" onChange={(e)=>{
                    setPersonalData({
                        ...personalData, 
                        password:e.target.value
                    })
                }}/>



                <button className="basket-btn" style={{width:"100%", borderRadius:"5px", backgroundColor:"#f7ca05", border:"solid grey 1px"}}>Continue</button>

                <p>By signing-in you agree to Amazon's <Link href="/">Conditions of Use & Sale.</Link> Please see our <Link href="/">Privacy Notice</Link>, our <Link href="/">Cookies Notice</Link> and our <Link href="/">Interest-Based Ads Notice.</Link> </p>
                </form>

            <div className="new-to-amazon"> <p style={{backgroundColor:"white", padding:"0 0.3rem"}}>New to Amazon?</p>
            <div className="account-border"></div>

            </div>

<div className="new-account-container">
<Link href="/create-account"><button className="basket-btn account-btn" style={{width:"90%", borderRadius:"5px", backgroundColor:"rgb(225, 220, 220)", border:"solid grey 1px"}}>Create your Amazon account</button></Link>

</div>
<div style={{height:"15rem"}}></div>
<AccountFooter key={Math.random()}/>
            
        </div>
    ) 
}

export default Account