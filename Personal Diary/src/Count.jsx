import React, { useEffect, useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count Component Mounted")
    }, [])

    const handleIncrement = () => {
        setCount(count + 1);
        setCount(((prev) => prev + 1));
    }

    return (
        <div>
            <h1>{count}</h1>
            <h1>{count}</h1>
            <p>{count}</p>
            <div>{count}</div>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}
