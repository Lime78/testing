import { create } from "zustand";
import { todos } from './data.js';
import { getToday } from "../utils/date.js";

const useStore = create((set) => ({
  todos: todos,  // TODO: "todos" är data som du kan använda under utvecklingen - byt ut den mot din egen testdata

  todayName: getToday(),
  // TODO: du behöver en funktion setTodayName för att kunna testa appen med olika veckodagar
  setTodayName: (newTodayName) => set(() => ({ todayName: newTodayName })),

  toggleTodo: (id) => set((state) => {
    // Fix the potential bug by updating the todo correctly
    return {
      ...state,
      todos: state.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        } else {
          return t;
        }
      })
    };
  }),

  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id)
  })),

  resetTodos: () => set(() => ({ todos: [] })),

  // TODO: lägg till en funktion "setTodos" så att du kan ändra innehållet i store från dina testfiler
  setTodos: (newTodos) => set(() => ({ todos: newTodos })),

  editTodo: (id, text) => set((state) => ({
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: text };
      } else {
        return todo;
      }
    })
  })),

  searchText: '',
  setSearchText: (text) => set(() => ({ searchText: text })),

  // searchTodo is no longer needed, since we'll handle it in the component
}));

export { useStore };
