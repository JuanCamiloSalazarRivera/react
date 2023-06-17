import React from "react";
import Button from 'react-bootstrap/Button';

function handleClick() {
    alert('Hola he clickeado');
}

export default function Button1() {
    return (
        <div className="container">
            <Button variant="primary" onClick={handleClick}>de clic aquí</Button>
        </div>
    )
}