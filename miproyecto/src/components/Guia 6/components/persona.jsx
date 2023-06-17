import { getImageUrl_ } from "../helps/utils";
import { people } from "../database/data";

export default function ListPersona() {
    let filtro = "Desarrollador"
    let filtro2 = "Diseñador"
    const desarrollador = people.filter(person =>
        person.profession == filtro
        );
    const diseñador = people.filter(person =>
        person.profession == filtro2
        );
    const listItemsDe = desarrollador.map(person =>
        <li key={person.id}>
            <img
              src={getImageUrl_(person)}
              alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        );
        
    const listItemsDi = diseñador.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl_(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        );
    return <ul>{listItemsDi}</ul>;
}