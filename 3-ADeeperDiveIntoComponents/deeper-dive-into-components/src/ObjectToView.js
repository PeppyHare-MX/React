import React from 'react';

const sourceObject = {
    val1: 'Value 1',
    val2: 'Value 2',
    val3: 'Value 3',
    val4: 'Value 4'
};

const ObjectToView = () => {
    return (
        <section>
            <h1>Object Listing</h1>
           <ol>{
                Object.keys(sourceObject)
                        .map(key => (<li key={key}>{sourceObject[key]}</li>))
            }</ol>

        </section>
    );
};

export default ObjectToView;