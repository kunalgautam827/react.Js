import {createContext,useContext} from "react"

export const TodoContext = createContext({
    todos : [
        {
        todo : "message",
        completed : false,
        id:1
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (todo,id)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}
