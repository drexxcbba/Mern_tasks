import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitPoryecto = e => {
        e.preventDefault();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Projecto</button>
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitPoryecto}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
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