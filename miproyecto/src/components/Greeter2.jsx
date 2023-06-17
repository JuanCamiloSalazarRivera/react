import React from "react";

export const Greeter2 = ({ first, last, estado })=> {
    return (
        <p>
            Hello, {first} tiene {last} años y esta {(estado)? "activo":"inactivo"} en el sistema.
        </p>
    );
}