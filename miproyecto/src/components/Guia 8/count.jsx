import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const descrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Contar: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={descrement}>Descrement</button>
        </div>
    );
}

export default Counter;