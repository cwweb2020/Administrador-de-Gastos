import React ,{Fragment,useState} from 'react'
import Error from './Error'

const Pregunta = ({guardarPresupuesto , guardarRestante , actualizarContenido}) => {


    //State de Ingresos

    const [cantidad , guardarCantidad] = useState(0)


    // State de Error

    const [error , guardarError] = useState(false)


    const definirPresupuesto = e => {

        guardarCantidad(parseInt(e.target.value) ,0)
    }


    const ingresarValor = e => {

        e.preventDefault();

        // Validar

        if(cantidad < 1 || isNaN(cantidad) ) {

            guardarError(true)
            return;
        }

        // Si pasa la validacion

        guardarError(false);
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarContenido(false)
    }


    return (

        <Fragment>

            <h2>Cual es son tus ingresos</h2>

            {error ? <Error
                            
                        mensaje="El valor ingresaado no es valido"    />

            : null}


            <form onSubmit={ingresarValor}>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ejemplo: 15000"
                    onChange={definirPresupuesto}

                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Ingresar"

                />


            </form>




        </Fragment>
    )
}

export default Pregunta
