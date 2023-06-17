import "../../App.css";
import Toolbar from "./Toolbar";

function AppM12() {
    return (
        <Toolbar 
            onPlayMovie={() => alert('la pelicula se va a reproducir')}
            onUploadImage={() => alert('la imagen se va a cargar!')}
        />
    )
}

export default AppM12;