import React, { useEffect, useState } from "react"

export default function Navbar() {
    const [count, setCount] = useState(0);
    const hello = () => {
        console.log("hello")
    }

    const addCount = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        hello();
    }, [])
    return (
        <>
            THIS IS NAVBAR
            <button onClick={addCount}>Add Count</button>
            {count}
        </>
    )
}