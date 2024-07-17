
import { useState } from "react";
import HeaderLink from "../HeaderLink"
import styles from "./Header.module.css"
import logo from "./logo-aluraflix.png"
import { Link } from "react-router-dom"

function Header() {
    const [activado,setActivado]=useState(null);
    const manejoClick=(name) => {
        setActivado(name);
    }
    return(
        <header className={styles.header}>
            <Link to="/">
            <section className={styles.logoContainer}>
                <img src={logo} alt="Logo aluraflix"/>
            </section>
            </Link>
            <nav>
                <div className={styles.navcontainer}>
                <HeaderLink to="./" >
                <button className={activado ==='home'?`${styles.link} ${styles.activolink}`: styles.link}
        onClick={() =>manejoClick('home')} >
                HOME
                </button>
                </HeaderLink>
                <HeaderLink to="./NuevoVideo">
                 <button className={activado ==='nuevo video'?`${styles.link} ${styles.activolink}`: styles.link}
                 onClick={() =>manejoClick('nuevo video')} to="./NuevoVideo"> NUEVO VIDEO</button>
                
                </HeaderLink>
                </div>
            </nav>

        </header>
    )
}
export default Header

