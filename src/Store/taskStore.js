// taskStore.js
import create from 'zustand';

const useTaskStore = create((set) => ({
  popUp: false,
  showPopUp: (state) => set((state)=>(state.popUp)),
  
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (taskId) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) })),
  clearTasks: () => set({ tasks: [] }),
}));

export default useTaskStore;
