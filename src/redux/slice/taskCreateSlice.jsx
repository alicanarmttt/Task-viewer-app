import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [], // Tüm görevler burada saklanacak
};

export const taskCreateSlice = createSlice({
  name: "taskCreate",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        ...action.payload,
        isCompleted: false, // Yeni görev tamamlanmamış olarak eklenir
      };
      state.tasks.push(newTask);
    },
    completeTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex].isCompleted = true; // Görevi tamamlandı olarak işaretle
      }
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex].taskInfo = action.payload.taskInfo;
      }
    },
  },
});

export const { addTask, completeTask, removeTask, updateTask } =
  taskCreateSlice.actions;
export default taskCreateSlice.reducer;
