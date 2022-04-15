import CreateAccountform from "../components/CreateAccountForm"

function createAccount(){
    return(
        <CreateAccountform key={Math.random()}/>
    )
}

export default createAccount