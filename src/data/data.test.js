import { describe, it, expect } from 'vitest';
import { todos } from './data.js';


describe('Todos Data', () => {
  it('should contain 6 todos', () => {
    expect(todos.length).toBe(6);
  });

  it('should have correct properties for each todo', () => {
    todos.forEach(todo => {
      expect(todo).toHaveProperty('id');
      expect(todo).toHaveProperty('day');
      expect(todo).toHaveProperty('done');
      expect(todo).toHaveProperty('late');
      expect(todo).toHaveProperty('text');
    });
  });

  it('should have specific todo texts', () => {
    const todoTexts = todos.map(todo => todo.text);
    expect(todoTexts).toContain('Gör klart inlämning');
    expect(todoTexts).toContain('Lektion i skolan 9-16');
    expect(todoTexts).toContain('Övning 1');
    expect(todoTexts).toContain('Repetera lektionen');
    expect(todoTexts).toContain('Övning 2');
    expect(todoTexts).toContain('Distanslektion 9-16');
  });

  it('should have correct values for "done" property', () => {
    const doneValues = todos.map(todo => todo.done);
    expect(doneValues).toContain(true);
    expect(doneValues).toContain(false);
  });

  it('should have correct values for "late" property', () => {
    const lateValues = todos.map(todo => todo.late);
    expect(lateValues).toContain(true);
    expect(lateValues).toContain(false);
  });
});
