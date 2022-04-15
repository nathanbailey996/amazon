import Link from "next/link"

function AccountFooter (){
    return(
        <footer className="account-footer">
            <ul>
                <li><Link href="/">Conditions of use</Link></li>
                <li><Link href="/">Privacy Notice</Link></li>
                <li><Link href="/">Help</Link></li>
                <li><Link href="/">Cookie Notice</Link></li>
                <li><Link href="/">Interest-based Cookie Notice</Link></li>
            </ul>
<p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>

        </footer>
    )
}

export default AccountFooter