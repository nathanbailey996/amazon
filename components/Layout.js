import Navbar from "./Navbar"

function Layout (props){
return(
<div>
    <Navbar state={props.state} key={Math.random()}/>
    <main>{props.children}</main>
</div>
)
}

export default Layout 