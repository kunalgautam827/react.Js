import React from "react";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

function Todos() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  

  return (
    <>
      {
        (todos || []).map((todo) => (
        <div key={todo.id}
          className={`text-white flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 "bg-[#ccbed7]" `}
        >
          <input
            type="text"
            className={`outline-none w-full bg-transparent rounded-lg `}
            value={todo.text}
            readOnly={true}
          />

          {/* Delete Todo Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
}

export default Todos;
