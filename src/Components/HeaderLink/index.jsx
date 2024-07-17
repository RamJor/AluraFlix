import {  Link,   } from "react-router-dom";




function HeaderLink({url,children}) {
   
    return(
        <Link to={url} >
        {children}
        </Link>
    )
}

export default HeaderLink