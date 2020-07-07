import React, {useState} from 'react';

const list = [
    { id: 1, name: 'The beach', topDestination: true},
    { id: 3, name: 'The mountains', topDestination: false},
    { id: 4, name: 'Vibrant cities', topDestination: true},
    { id: 5, name: 'Rough it', topDestination: false},
    { id: 6, name: 'Ultimate survival', topDestination: false}
];

const ArrayFilter = () => {

    const [showAll, setShowAll] = useState(true);

    return (
        <section>
            <h1>UltimateHolidayList Destinations</h1>
            <ul>{
                list.filter(item => (showAll ? true : item.topDestination))
                    .map(item => (<li key={item.id}>{item.name}</li>))
            }</ul>

            <button type="button" onClick={() => {setShowAll(true)}}>Show All</button>
            <button type="button" onClick={() => {setShowAll(false)}}>Show only top destinations</button>
        </section>
    );
};

export default ArrayFilter;