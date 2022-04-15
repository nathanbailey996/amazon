import Link from "next/link"
import { useState } from "react"
import AccountFooter from "./AccountFooter.js"
import { useRouter } from "next/router"
import {  auth} from "./firebase"


function CreateAccountform (){
const [personalData, setPersonalData] = useState({
    name:"", 
    email:"", 
    password:"", 
    confirmPassword:"", 
})
const router = useRouter()

const handleRedirect = ()=>{
router.push("/")
}
function handleChange(e){
  const  {name, value} = e.target
setPersonalData({
    ...personalData, 
    [name]:value, 
})
}

function handleSubmit (e){
    e.preventDefault()
    
    auth.createUserWithEmailAndPassword(personalData.email, personalData.password)
    .then((auth)=>{
        console.log(auth)
    })
.catch(error=> alert(error.message))
if(auth){
    handleRedirect()
}
}

    return(
        <div className="account-section">
          <img src="/account-amazon-logo-image.png" alt="" className="account-img" style={{marginTop:"1rem"}} onClick={handleRedirect}/>
            <form className="form" onSubmit={handleSubmit}>
                <legend>Create Account</legend>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" value={personalData.name} name="name" className="account-input" onChange={(e)=>{
                    handleChange(e)
                }}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={personalData.email} name="email" className="account-input" onChange={(e)=>{
                    handleChange(e)
                }}/>
                <label htmlFor="password">Your Password</label>
                <input type="text" id="password" value={personalData.password} name="password" className="account-input" onChange={(e)=>{
                    handleChange(e)
                }}/>
                <label htmlFor="confirmPassword">Confirm your Password</label>
                <input type="text" id="confirmPassword" value={personalData.confirmPassword} name="confirmPassword" className="account-input" onChange={(e)=>{
                    handleChange(e)
                }}/>






                <button className="basket-btn account-btn" style={{width:"100%", borderRadius:"5px", backgroundColor:"#f7ca05", border:"solid grey 1px"}}>Continue</button>

                <p>By signing-in you agree to Amazon's <Link href="">Conditions of Use & Sale.</Link> Please see our <Link href="/">Privacy Notice</Link>, our <Link href="/">Cookies Notice</Link> and our <Link href="/">Interest-Based Ads Notice.</Link> </p>
            </form>

            <div className="new-to-amazon"> <p style={{backgroundColor:"white", padding:"0 0.3rem"}}>Already have an account?</p>
            <div className="account-border"></div>

            </div>

<div className="new-account-container">
<Link href="/sign-in"><button className="basket-btn" style={{width:"90%",maxWidth:"30rem", borderRadius:"5px", backgroundColor:"rgb(225, 220, 220)", border:"solid grey 1px"}}>Sign in</button></Link>

</div>
<AccountFooter key={Math.random()}/>
            
        </div>
    ) 
}

export default CreateAccountform