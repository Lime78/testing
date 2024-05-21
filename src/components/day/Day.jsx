// import Item from "./Item"

// // OBS, det är tillåtet att lägga till flera props
// // När du testar, rendera komponenten med olika värden på props
// const Day = ({ day }) => {
//     const daysOfWeek = [
//         'Söndag', 
//         'Måndag',  
//         'Tisdag',  
//         'Onsdag',
//         'Torsdag', 
//         'Fredag',  
//         'Lördag'   
//     ];


// 	return (
// 		<div className="day">
// 			<h2> {dayName} </h2>

// 			{day.map(item => (
// 				<Item key={item.id} item={item} />
// 			))}

// 			<div className="controls">
// 				<button> Ny uppgift </button>
// 			</div>
// 		</div>
// 	)
// }

// export default Day

import React from 'react';
import Item from "./Item";


const Day = ({ day, date }) => {
    const daysOfWeek = [
        'Söndag', 
        'Måndag',  
        'Tisdag',  
        'Onsdag',
        'Torsdag', 
        'Fredag',  
        'Lördag'   
    ];

    const dayName = daysOfWeek[date.getDay()]; // Assuming date is a Date object

    return (
        <div className="day">
            <h2>{dayName}</h2>

            {day.map(item => (
                <Item key={item.id} item={item} />
            ))}

            <div className="controls">
                <button>Ny uppgift</button>
            </div>
        </div>
    );
};

export default Day;
