import React from 'react';

const list = [
    { id: 1, name: 'The beach', },
    { id: 3, name: 'The mountains', },
    { id: 4, name: 'Vibrant cities', },
    { id: 5, name: 'Rough it', },
    { id: 6, name: 'Ultimate survival' }
];

const UltimateHolidayList = () => (
    <section>
        <h1>UltimateHolidayList Destinations</h1>
        <ul>{
            list.map(item => (
                <li key={item.id}>{item.name}</li>
            ))
        }</ul>
    </section>
);

export default UltimateHolidayList;