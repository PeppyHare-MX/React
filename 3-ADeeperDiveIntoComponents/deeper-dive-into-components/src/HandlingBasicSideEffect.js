import React, {Fragment, useEffect, useState} from 'react';

const HandlingBasicSideEffect = () => {

    const [counter, setCounter] = useState(0);
    const [internalCount, setInternalCount] = useState(0);

    useEffect(() => {
        document.title = `Counter Tittle ${counter}`;
        console.log('Title was set');
    }, [counter]);

    const onCountClickHandler = () => {
        setCounter(c => c + 1);
    };

    const onInternalCountClickHandler = () => {
        setInternalCount(i => i + 1);
    };

    console.log('Main Render Return');

    return (
        <Fragment>
            <section>
                <p>Counter Handling Effect </p>
                <p>Counter: {counter}</p>
                <p>Internal Counter: {internalCount}</p>
                <button type="button" onClick={onCountClickHandler}>Increment</button>
                <button type="button" onClick={onInternalCountClickHandler}>Internal increment count</button>
            </section>
        </Fragment>
    );
};

export default HandlingBasicSideEffect;