import '../App.css';
import { Greeter } from './destruccion_props'

function AppM2() {
    return (
        <div className='container'>
            <Greeter first="Juan" last="Gonzales"/>
            <Greeter first="Ana" last="Perez"/>
        </div>
    )
}

export default AppM2;