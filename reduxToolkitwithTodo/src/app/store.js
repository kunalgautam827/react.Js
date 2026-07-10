import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from "/src/features/todo/todoSlice.js"

export const Store = configureStore({
    reducer : TodoReducer  
})

