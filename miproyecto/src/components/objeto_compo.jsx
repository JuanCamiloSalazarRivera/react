import '../App.css';
import { Empleado } from './objetos'

const empleado = {
    nombre: "Diego",
    edad: 30,
    salario: 2500
}

function AppM4() {
    return (
        <div className='container'>
            <Empleado emple={empleado}/>
        </div>
    );
}

export default AppM4;