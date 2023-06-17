import '../App.css';
import { Greeter2 } from './Greeter2'

function AppM3() {
    return (
        <div className='container'>
            <Greeter2 first="Juan" last="30" estado={true}/>
            <Greeter2 first="Alicia" last="18" estado={true}/>
            <Greeter2 first="Andrea" last="25" estado={true}/>
        </div>
    );
}

export default AppM3;