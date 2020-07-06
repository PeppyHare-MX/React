import React, {Fragment, useState} from 'react';

const Counter = () => {

    const [counter, setcounter] = useState(0);

    const onClickHandler = () => {
        setcounter(counter+1);
        console.log('Button was pressed');
    }

    return (
        <Fragment>
            <p>{counter}</p>
            <button type="button" onClick={onClickHandler}>Increment</button>
        </Fragment>
    );
}

export default Counter;