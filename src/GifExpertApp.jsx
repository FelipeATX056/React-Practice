import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


export const GifExpertApp = () => {

const [categories, setCategories] = useState(["Vegeta"]);


const subtract =() =>{
    setCategories( categories.slice(0, -1))
}


const onAddCategory = (verifyCategory) => {

    if ( categories.includes(verifyCategory) ) return


    //console.log(verifyCategory);
    setCategories([ verifyCategory, ...categories])
}

return (
<>

    <h1>SpaceANIME</h1>

    <AddCategory  onNewCategory={(value) => onAddCategory(value) }
    />

    <button onClick={ subtract}>subtract</button> 

    {
    categories.map(category => 
            (
                <GifGrid
                 key={category}
                 category={category}/>
            )
    )
}

</> 
    )
    
}

export default GifExpertApp
