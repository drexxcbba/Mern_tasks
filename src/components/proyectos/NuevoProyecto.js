import React, { Fragment } from 'react';

const NuevoProyecto = () => {
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Projecto</button>
            <form
                className="formulario-nuevo-proyecto"
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="nombre"
                />
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />
            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;