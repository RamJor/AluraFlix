import { useContext } from "react"
import CategoryContainer from "../CategoryContainer"
import { GlobalContext } from "../../Globalcontext/GlobalContext"


function Category() {
    const {categories} = useContext(GlobalContext)
    return(
        <>
        {categories.map((categoria)=> {
            return(
                <CategoryContainer key={categoria.id} {...categoria}/>
            )
        })}
        </>
    )
}
export default Category