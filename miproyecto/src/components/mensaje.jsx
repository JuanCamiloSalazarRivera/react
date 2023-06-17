import '../App.css';

import { Greetings } from './funcion_pura';

function AppM() {
    return (
        <div className='container'>
            <Greetings name="Hola, saludo primer mensaje"/>
            <Greetings name="Segundo mensaje"/>
            <Greetings name="tercer mensaje"/>
        </div>
    );
}

export default AppM;