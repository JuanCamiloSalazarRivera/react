import { getImageUrl_r } from "../helps/utils_receta";
import { recetas } from "../database/receta";

export default function ListRecetas() {
    let filtro = "Baja"
    let filtro2 = "Media"
    const baja = recetas.filter(receta =>
        receta.dificultad == filtro
        );
    const media = recetas.filter(receta =>
        receta.dificultad == filtro2
        );
    const listItemsB = baja.map(receta =>
        <li key={receta.id}>
            <img
              src={getImageUrl_r(receta)}
              alt={receta.nombre}
            />
            <p>
                <b>{receta.nombre + '. '}</b>
                Tiene una dificultad {' ' + receta.dificultad + ' '}
                con una duracion de {receta.duracion + '. '}
                sus ingredientes son {receta.ingredientes + ' '}
                y pertenerce a la categoria {receta.categoria}
            </p>
        </li>
        );

    const listItemsM = media.map(receta =>
        <li key={receta.id}>
            <img
                src={getImageUrl_r(receta)}
                alt={receta.nombre}
            />
            <p>
                <b>{receta.nombre + '. '}</b>
                Tiene una dificultad {' ' + receta.dificultad + ' '}
                con una duracion de {receta.duracion + '. '}
                sus ingredientes son {receta.ingredientes + ' '}
                y pertenerce a la categoria {receta.categoria}
            </p>
        </li>
        );
        
    return <ul>{listItemsM}</ul>;
}