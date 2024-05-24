import React, { useState } from 'react';
import { useStore } from '../../data/store.js';

const Item = ({ item }) => {
  const { deleteTodo, editTodo } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.text);

  let itemClass = '';
  if (item.done) itemClass += 'done';
  if (item.late) itemClass += 'due';

  const handleChange = () => {
  };

  const handleDelete = () => {
    deleteTodo(item.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(item.id, newText);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setNewText(e.target.value);
  };

  return (
    <div className="item">
      <input type="checkbox" checked={item.done} onChange={handleChange} />
      {isEditing ? (
        <input type="text" value={newText} onChange={handleInputChange} onBlur={handleSave} />
      ) : (
        <label className={itemClass} onClick={handleChange}>
          {item.text}
        </label>
      )}
      {/* <span title="Snooza">💤</span> */}
      <span title="Ändra" onClick={handleEdit}>✍️</span>
      <span onClick={handleDelete} title="Ta bort">🗑️</span>
    </div>
  );
};

export default Item;

