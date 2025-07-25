import React,{ useState } from "react"

const TodoInput = ({onAdd}) =>     //takes one prop onAdd
    
{          
    
    
const[input,setInput]  = useState('')
const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input) ;
    setInput('');
};

return (

    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new Task"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
      >
        Add
      </button>


    </form>

)

}

export default TodoInput;
