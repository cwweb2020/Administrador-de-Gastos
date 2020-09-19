import React , {useState} from 'react'
import Error from './Error'
import shortId from 'shortid'

const Formulario = ({actualizarGasto,guardarCrearGasto}) => {


// Definiendo State para area de Nombre de Gasto y de Cuanto Gasto el cliente 


const [nombre , guardarNombre] = useState('');
const [cantidad , guardarCantidad] = useState(0);

// Defino el State de error para una validacion agil 

const [error , guardarError] = useState(false)


const agregarGasto = e => {

    e.preventDefault();

    // Validar los datos 

    if(cantidad < 1 || isNaN(cantidad) || nombre.trim()===''){

        guardarError(true)
        return;
    }

    guardarError(false)

    // construir el Gasto

    const gasto = {
        nombre,
        cantidad,
        id:shortId.generate()
    }





    // Pasar a componente principal 

    actualizarGasto(gasto)
    guardarCrearGasto(true)

    // Restaurar el form 

    guardarNombre('')
    guardarCantidad(0)



}


    return (
        <div>

            <form onSubmit ={agregarGasto}>
                <h2>Agrega tus gastos</h2>

                {error?  <Error mensaje="El valor no es valido o el gasto no tiene nombre"/>  : null}

                    <label>Nombre de Gasto</label>
                    <input  
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={nombre}
                        onChange={ e => guardarNombre(e.target.value)}
                    
                    />


                    <label>Cuanto Gastaste?</label>
                    <input  
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value={cantidad}
                        onChange={e => guardarCantidad(parseInt(e.target.value))}
                    
                    />


                    <input  
                        type="submit"
                        className="u-full-width button-primary"
                        placeholder="Ej. 300"
                        value="Ingresar el gasto"
                    
                    />

                    

            </form>
            
        </div>
    )
}

export default Formulario
