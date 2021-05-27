import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        {nombre: 'Tienda virutal'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de Sitio web'}
    ];
    
    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(it => (
                <Proyecto proyecto={it} />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;