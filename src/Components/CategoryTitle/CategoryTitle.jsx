import styles from "./CategoryTitle"
function CategoryTitle(categoria, color) {
    return(
        <>
        <section className={styles.container}>
            <div className={styles.titulos} style={{background: rgb`${color}`}}>
                <h2 className={styles.tituloCategoria}>{categoria}</h2>
            </div>
        </section>
        </>
    )
}
export default CategoryTitle