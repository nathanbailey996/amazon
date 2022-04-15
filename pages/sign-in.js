import Account from "../components/Account"

function signIn(){
    return(
        <Account key={Math.random()}/>
    )
}

export default signIn