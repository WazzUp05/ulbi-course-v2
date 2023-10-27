import React, { useState } from 'react';
import classes from './Counter.module.scss';
export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <button className={classes.btn} onClick={increment}>
                increment
            </button>
            {count}
            <button onClick={decrement}>decrement</button>
        </div>
    );
};
