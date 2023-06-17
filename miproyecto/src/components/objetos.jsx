export const Empleado = (props)=>{
    return(
        <div>
            <p>Nombre: {props.emple.nombre}</p>
            <p>Edad: {props.emple.edad}</p>
            <p>Salario: {props.emple.salario}</p>
        </div>
    );
}