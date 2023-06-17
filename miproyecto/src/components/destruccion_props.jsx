import React from "react";

// export const Greeter= (props)=> {
//     return (
//         <h1>
//             Hello, {props.first} {props.last}
//         </h1>
//     );

// export const Greeter= (props)=> {
//     const { first, last } = props;
//     return (
//         <h1>
//             Hello, {first} {last}
//         </h1>
//     );

export const Greeter= ({ first, last})=> {
    return (
        <h1>
            Hello, {first} {last}
        </h1>
    );
}