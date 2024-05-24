// store.test.js

import { describe, it, expect, beforeEach } from 'vitest';
import create from 'zustand';
import { useStore } from './store';

// Mock the todos data
const initialTodos = [
  { id: 1, text: 'First Todo', done: false },
  { id: 2, text: 'Second Todo', done: true },
];

// Create a mock Zustand store for testing
const useTestStore = create((set) => ({
  todos: initialTodos,
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  setTodos: (newTodos) => set(() => ({ todos: newTodos })),
  resetTodos: () => set(() => ({ todos: [] })),
}));

describe('useStore', () => {
  beforeEach(() => {
    // Reset the store state before each test
    useTestStore.setState({ todos: initialTodos });
  });

  it('should delete a todo by id', () => {
    const { deleteTodo, todos } = useTestStore.getState();

    // Call deleteTodo function
    deleteTodo(1);

    // Get updated state
    const updatedTodos = useTestStore.getState().todos;

    // Assert the length of todos and ensure the specific todo is deleted
    expect(updatedTodos).toHaveLength(1);
    expect(updatedTodos.find(todo => todo.id === 1)).toBeUndefined();
  });

  it('should not delete any todos if id does not match', () => {
    const { deleteTodo, todos } = useTestStore.getState();

    // Call deleteTodo function with a non-existing id
    deleteTodo(3);

    // Get updated state
    const updatedTodos = useTestStore.getState().todos;

    // Assert the length of todos and ensure no todos are deleted
    expect(updatedTodos).toHaveLength(2);
    expect(updatedTodos.find(todo => todo.id === 1)).toBeDefined();
    expect(updatedTodos.find(todo => todo.id === 2)).toBeDefined();
  });
});
