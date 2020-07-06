import React, {Fragment} from 'react';

const InteractiveView = ({counterValue, onIncrement, actionText}) => {

    return (
        <Fragment>
            <p>{counterValue}</p>
    <button type="button" onClick={onIncrement}>{actionText}</button>
        </Fragment>
    );
}

export default InteractiveView;