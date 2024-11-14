import { useState } from "react"


const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState ("")
const onChange = ({target}) => {
    setInputValue(target.value);
}

const onSumbmit= (event) =>{
event.preventDefault();
if(inputValue.trim().length <= 1)  return;

// setCategories(categories=>[inputValue, ...categories]);
onNewCategory( inputValue.trim());
setInputValue("");
}

    
    

return (

    <form onSubmit={onSumbmit}>

<input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={onChange}
    />
    </form>
    )
}





export default AddCategory
