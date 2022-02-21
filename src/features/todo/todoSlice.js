import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {id: 0, name: 'milk'}, 
    {id: 1, name: 'coffee'},
    {id: 2, name: 'mochi'},
  ]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem : (state, action) => {
           state.items.concat([{id: state.items.length, name: action.payload}])
        },
        removeItem: (state, action) => {
            state.items.filter(item => item.id !== action.payload.id)
        }
    }

})

console.log(todoSlice);

export const todoReducer = todoSlice.reducer

export const selectAllItems = (state) => state.todo.items;


