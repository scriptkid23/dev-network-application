import React from 'react'
import {Button} from 'react-bootstrap'
export function Signin() {
    const handleOnClick = () => {
        alert("Click me")
    }
    return (
        <div className="container d-flex flex-column">
            <Button onClick={() => handleOnClick()}>Hello</Button>
        </div>
    )
}
