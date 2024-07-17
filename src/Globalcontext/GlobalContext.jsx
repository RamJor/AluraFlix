import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();
function GlobalContextProvider({children}) {
    const url = "https://66970d2402f3150fb66c7de8.mockapi.io/Aluraflix/categories"
    /*Importar categorires*/
const[categories, setCategories]= useState([]);
useEffect(()=>{
    const getData =async () => {
        const res = await fetch(`${url}/categories`);
        const data = await res.json();
        setCategories(data);
    }
    getData();
},[])

return(
    <GlobalContext.Provider>
    value={{videos,
    categories

    }}
    </GlobalContext.Provider>
)
}


