
import styles from "./Footer.module.css"
import logo from "./logo-aluraflix (2).png"
function Footer() {
    return(
        <footer className={styles.footer}>
            <img src={logo} alt="logo footer" />
            <p>Desarrollado por: Jorge Ramírez</p>
        </footer>
    )
}
export default Footer