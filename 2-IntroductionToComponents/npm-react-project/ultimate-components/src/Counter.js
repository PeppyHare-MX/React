import React, {Fragment, useState} from 'react';
import InteractiveView from './InteractiveView';

const Counter = () => {

    const [counter, setcounter] = useState(0);

    const onIncrementHandler = () => {
        setcounter(counter+1);
        console.log('Button was pressed');
    }

    return (
        <InteractiveView 
            counterValue = {counter}
            onIncrement = {onIncrementHandler}
            actionText = "Increment"
        />
    );
}

export default Counter;