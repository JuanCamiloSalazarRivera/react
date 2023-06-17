import '../App.css';
import { Fruta } from "./frutas";

const frutas = ["manzana", "pera", "piña"];

function AppM5() {
    return (
        <div className="container">
            <Fruta fru = {frutas} />
        </div>
    );
}

export default AppM5;