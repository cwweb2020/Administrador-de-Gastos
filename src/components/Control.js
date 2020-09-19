import React ,{Fragment} from 'react'
import {revisarPresupuesto,advertencia} from '../helpers'

const Control = ({gastos,presupuesto,restante}) => {




    return (

        <Fragment>

        


        <div className="alert alert-primary">
            Presupuesto : $ {presupuesto}
        </div>

       { gastos.length > 0 ? 
       
    
        <div className={revisarPresupuesto(presupuesto,restante)}>
             Restante: $ {restante}
        </div>
    
        : null
       }

        

        </Fragment>

    )
}

export default Control
