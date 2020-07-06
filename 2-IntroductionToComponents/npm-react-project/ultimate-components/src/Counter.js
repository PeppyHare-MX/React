import React, {Fragment, useState} from 'react';

const CounterView = ({counterValue, onIncrement}) => {

    return (
        <Fragment>
            <p>{counterValue}</p>
            <button type="button" onClick={onIncrement}>Increment</button>
        </Fragment>
    );
}


const Counter = () => {

    const [counter, setcounter] = useState(0);

    const onIncrementHandler = () => {
        setcounter(counter+1);
        console.log('Button was pressed');
    }

    return (
        <CounterView 
            counterValue = {counter}
            onIncrement = {onIncrementHandler}
        />
    );
}

export default Counter;