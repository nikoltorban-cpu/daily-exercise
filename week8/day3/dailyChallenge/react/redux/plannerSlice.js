import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedDay: "10.5.2026",
    tasksByDay: {}
};

const plannerSlice = createSlice({
    name: "planner",
    initialState,
    reducers: {
        selectDay: (state, action) => {
            state.selectedDay = action.payload;
        },

        addTask: (state, action) => {
            const { day, text } = action.payload; 
            if(!state.tasksByDay[day]) {
                state.tasksByDay[day] = [];
            }
            state.tasksByDay[day].push({
                id: Date.now(),
                text
            });
        }, 
        editTask: (state, action) => {
            const { day, id, newText} = action.payload;
            const tasks = state.tasksByDay[day]?.find(
                task => task.id === id
            );

            if(task) task.text = newText;
        },
        deleteTask: (state, action) => {
            const { day, id } = action.payload;
            state.tasksByDay[day] = 
            state.tasksByDay[day]?.filter(
                task => task.id !== id
            );
        }
    }
});

export const {
    selectDay,
    addTask,
    editTask,
    deleteTask
} = plannerSlice.actions;

export default plannerSlice.reducer;