import Item from "./Item";

// OBS, det är tillåtet att lägga till flera props
// När du testar, rendera komponenten med olika värden på props
const Day = ({ day }) => {
    const daysOfWeek = [
        'Söndag', 
        'Måndag',  
        'Tisdag',  
        'Onsdag',
        'Torsdag', 
        'Fredag',  
        'Lördag'
    ];

    const dayName = daysOfWeek[day.index];

    return (
        <div className="day">
            <h2>{dayName}</h2>
            {day.items.map(item => (
                <Item key={item.id} item={item} />
            ))}
            <div className="controls">
                <button>Ny uppgift</button>
            </div>
        </div>
    );
};

export default Day;
