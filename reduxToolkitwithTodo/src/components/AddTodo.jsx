import React,{ useState }  from 'react'
import { addTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

function AddTodo() {
    const [input,setInput]=useState("");
    const dispatch = useDispatch();
    const handleInput = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input));
        setInput("")
    }

    return (
        <form  className="flex" onSubmit={handleInput}>
            <input 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default AddTodo