import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/toodSlice";

function TodoItem() {
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [editableId, setEditableId] = useState(null);

  const inputRef = useRef(null)
  

  const handleEdit = (todo) => {
    // Save
    if (editableId === todo.id) {
      dispatch(
        updateTodo({
          id: todo.id,
          text: input,
        })
      );

      setEditableId(null);
      setInput("");
    }
    // Enter edit mode
    else {
      setEditableId(todo.id);
      setInput(todo.text);
    }
  };

  return (
    <>
      {todos.map((todo) => (
        <div
       
          key={todo.id}
          className= {`text-black flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 mb-2 ${editableId!==todo.id?"bg-green-300":"bg-red-300"}`}
        >
          <input
           ref={editableId === todo.id ? inputRef : null}
            type="text"
            className=" outline-none w-full bg-transparent rounded-lg"
            value={editableId === todo.id ? input : todo.text}
            onChange={(e) => setInput(e.target.value)}
            readOnly={editableId !== todo.id}
          />

          {/* Edit / Save Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => handleEdit(todo)}
          >
            {editableId === todo.id ? "💾" : "✏️"}
          </button>

          {/* Delete Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={()=>dispatch(removeTodo(todo.id))}
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
}

export default TodoItem;