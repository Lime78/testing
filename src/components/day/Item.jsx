// const Item = ({ item }) => {
// 	let itemClass = ''
// 	if( item.done ) itemClass += 'done'
// 	if( item.late ) itemClass += 'due'

// 	const handleChange = () => { /* TODO */ }

// 	return (
// 		<div className="item">
// 			<input type="checkbox" checked={item.done} onChange={handleChange} />
// 			<label className={itemClass} onClick={handleChange}>
// 				{item.text}
// 			</label>
// 			{/* <span title="Snooza">💤</span> */}
// 			<span title="Ändra">✍️</span>
// 			<span title="Ta bort">🗑️</span>
// 		</div>
// 	)
// }

// export default Item

import React, { useState } from 'react';
import Item from './Item'; // adjust the import path as necessary

const ItemList = () => {
	const [items, setItems] = useState([
		{ id: 1, text: 'Learn React', done: false, late: false },
		{ id: 2, text: 'Build a project', done: false, late: true },
		// Add more items as needed
	]);

	const handleEditItem = (updatedItem) => {
		setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
	};

	const handleDeleteItem = (itemToDelete) => {
		setItems(items.filter(item => item.id !== itemToDelete.id));
	};

	return (
		<div>
			{items.map(item => (
				<Item
					key={item.id}
					item={item}
					onEdit={handleEditItem}
					onDelete={handleDeleteItem}
				/>
			))}
		</div>
	);
};

export default ItemList;
