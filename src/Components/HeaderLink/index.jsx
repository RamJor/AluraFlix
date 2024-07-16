import {  NavLink  } from "react-router-dom";
import styles from "./HeaderLink.module.css";
import { useState } from "react";



function HeaderLink({url,children}) {
   
    return(
        <NavLink to={url} >
        {children}
        </NavLink>
    )
}

export default HeaderLink