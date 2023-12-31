import React from "react";

import { getImagUrl } from "./util";

function Avatar({ person, size }) {
    return (
        <img
        className="avatar"
        src={getImagUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    )
}
export default function Profile() {
    return (
        <>
        <div className="card">
            <Avatar size={100}
            person={{ name: "Katsuko Saruhashi", imageId: "Yfe0qp2",}}
            />{" "}
        </div>
        <div className="card">
            <Avatar size={80}
            person={{ name: "Aklilu Lemma", imageId: "0KS67lh", }}
            />{" "}
        </div>
        <div className="card">
            <Avatar size={50}
            person={{ name: "Lin Lanying", imageId: "1bX5QH6", }}
            />
        </div>
        </>
    );
}