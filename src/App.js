import React ,{useState,useEffect}from 'react';
import Control from './components/Control';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta';








function App() {


// Aqui defino el State de Presupuesto , Restante , CrearGasto   

  const [presupuesto , guardarPresupuesto] = useState(0)
  const [restante , guardarRestante] = useState(0)  
  const [crearGasto , guardarCrearGasto] = useState(false)


// Aqui defino el State de carga condicional 

  const [mostrar , actualizarContenido] = useState(true)


// Aqui defino el State que guarda los gastos generado 

const [gastos , actualizarGastos] = useState([])



//Use effect que va a cambiar el estado de restante

const [gasto , actualizarGasto] = useState({})

useEffect(()=> {

 if(crearGasto) {

  // agrega el gasto 
  actualizarGastos([

    ...gastos,
      gasto
  ])

  // Resetear a false

  guardarCrearGasto(false)

 }

 // Reste del presupuesto 

 const presupuestoRestante = restante - gasto.cantidad

 guardarRestante(presupuestoRestante)

},[gasto])






  return (

    <div className="container">
      <header>

      <h1>Administrador de Gastos</h1>
      
      
      </header>

      <div className="contenido contenido-principal">


        {mostrar ? 
        
          (

            <Pregunta

            //Aqui estoy pasando como props a Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
  
            // Aqui estoy pasando la funcion de carga condicional 
            actualizarContenido = {actualizarContenido}
  
  
          />
          ) : 
          
          (

            <div className="row u-full-width">

              <div className="one-half column">
                <Formulario
                
                // Estoy guardando los gastos en el componente principal 

                actualizarGasto={actualizarGasto}

                guardarCrearGasto={guardarCrearGasto}
                
                />
              </div>

              <div className="one-half column">
                <Listado
                
                gastos={gastos}
                />


                <Control
                presupuesto={presupuesto}
                restante={restante}
                gastos={gastos}
                
                />
             
                
              </div>


            </div>


          )
        }

      
           

      





      </div>


   

      

    </div>



  );
}

export default App;
