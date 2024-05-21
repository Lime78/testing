import { describe, it, expect } from 'vitest';
import { splitTodosIntoDays } from './list.js'; 

const todos = [
	{ id: 1, day: 'mo', done: true, late: false, text: 'Göra klart inlämning' },
	{ id: 2, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
	{ id: 3, day: 'ti', done: false, late: true, text: 'Övning 1' },
	{ id: 4, day: 'on', done: false, late: false, text: 'Repetera lektionen' },
	{ id: 5, day: 'on', done: true, late: false, text: 'Övning 2' },
	{ id: 6, day: 'to', done: false, late: false, text: 'Distanslektion 9-16' },
];

describe('splitTodosIntoDays', () => {
  it('should split todos into arrays for each day', () => {
    const [mo, ti, on, to, fr, lö, sö] = splitTodosIntoDays(todos);
    expect(mo).toEqual([{ id: 1, day: 'mo', done: true, late: false, text: 'Göra klart inlämning' }]);
    expect(ti).toEqual([
      { id: 2, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
      { id: 3, day: 'ti', done: false, late: true, text: 'Övning 1' }
    ]);
    expect(on).toEqual([
      { id: 4, day: 'on', done: false, late: false, text: 'Repetera lektionen' },
      { id: 5, day: 'on', done: true, late: false, text: 'Övning 2' }
    ]);
    expect(to).toEqual([{ id: 6, day: 'to', done: false, late: false, text: 'Distanslektion 9-16' }]);
    expect(fr).toEqual([]);
    expect(lö).toEqual([]);
    expect(sö).toEqual([]);
  });

  it('should handle an empty todos array', () => {
    const result = splitTodosIntoDays([]);
    expect(result).toEqual([[], [], [], [], [], [], []]);
  });
});
