import React, { useEffect } from "react"

export default function Navbar() {
    const hello = () => {
        console.log("hello")
    }

    useEffect(() => {
        hello();
    }, [])
    return (
        <>
            THIS IS NAVBAR
        </>
    )
}