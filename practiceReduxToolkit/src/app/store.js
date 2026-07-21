import { configureStore } from "@reduxjs/toolkit"
import TodoReducer from "../features/todo/toodSlice"

export const store = configureStore({
    reducer : {
        todo : TodoReducer
    }
})