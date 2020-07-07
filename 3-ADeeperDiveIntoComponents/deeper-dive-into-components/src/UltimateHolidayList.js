import React from 'react';

const list = [
    'The beach',
    'The mountains',
    'Vibrant cities',
    'Rough it',
    'Ultimate survival'
];

const UltimateHolidayList = () => (
    <section>
        <h1>UltimateHolidayList Destinations</h1>
        <ul>
            {list}
        </ul>
    </section>
);

export default UltimateHolidayList;