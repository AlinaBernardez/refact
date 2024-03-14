// import { useState } from 'react'
import { datos } from './data/datos'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import lodearriba from './top
import './App.css'
import { Cabecera } from './componentes/Cabecera'
import { Footer } from './componentes/Footer'
import { Calucladora } from './componentes/Calculadora'

function App() {
  // const [count, setCount] = useState(0)
  // const [agrupar, sumarMas] = useState(1)
  // const [contabilizar, quitar] = useState(0)
  return (
    <>
    <Cabecera />
    <Calucladora />
    <div className="envoltura">
      {datos.map((item, i) => (
      <div className='key' key={i}>
          <p><b>Nombre:</b> {item.name}</p>
          <p><b>Apellidos:</b> {item.lastName}</p>
          <p><b>Hobbies:</b> {item.hobbies.join(', ')}</p>
          <p><b>Edad:</b> {item.age}</p>
        </div>
        ))}
    </div>
    <Footer />
    </>
  )
}

export default App
