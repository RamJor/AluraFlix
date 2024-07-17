import CategoryTitle from "../CategoryTitle/CategoryTitle"
import styles from "./CategoryContainer.module.css"

function CategoryContainer() {
    return(
        <div className={styles.container}>
            <CategoryTitle categoria={categoria} color={color}/>

        </div>
)
}

export default CategoryContainer