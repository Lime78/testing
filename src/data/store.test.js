import { useStore } from './store.js';

test('setTodos updates the todos', () => {
  const { setTodos } = useStore.getState();

  const newTodos = [
    { id: 1, text: 'Test Todo', done: false },
  ];

  setTodos(newTodos);

  const { todos } = useStore.getState();
  expect(todos).toEqual(newTodos);
});
