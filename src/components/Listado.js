import React from 'react'
import Gasto from './Gasto'

const Listado = ({gastos}) => {
    return (
     <div>
        <h2>{ gastos.length > 0 ? "Listado de Gastos" : "No hay Gastos"}</h2>

        <div className="gastos-realizados">

            {gastos.map(gasto => (

                    <Gasto
                        gasto={gasto}
                        key={gasto.id}
                    
                    />

            ))}

        </div>
    </div>
    )
}

export default Listado

