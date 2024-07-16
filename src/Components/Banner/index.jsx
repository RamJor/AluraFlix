import styles from "./Banner.module.css"
import video from "./player.png"
function Banner() {
    return(
        <figure className={styles.banner}>
            <div className={styles.bannerContainer}>
            <h1 className={styles.category}>FRONT END</h1>
            <h2 className={styles.title}>Challenge React</h2>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte 
                en la resolución de un problema para poder aplicar 
                todos los conocimientos adquiridos en la formación React</p>
            </div>
                <a href="">
                    <img className={styles.video} src={video} alt="Imagen front" />
                </a>
        </figure>
    )
}
export default Banner