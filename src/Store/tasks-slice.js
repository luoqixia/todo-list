import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        quantity: 0
    }, 
    reducers: {
        addTask(state, action) {
            state.quantity ++;
            const newTask = action.payload;
            state.tasks.push({
                id: newTask.id,
                title: newTask.title,
                status: newTask.status
            })
        },
        removeTask(state, action) {
            state.quantity --;
            const taskToRemove = action.payload;
            state.items = state.items.filter((item) => item.id !== taskToRemove.id);
        }
    }
})

export const taskActions = taskSlice.actions;
export default taskSlice;