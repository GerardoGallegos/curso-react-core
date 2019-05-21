import React from 'react'
import TarjetaFruta from './components/TarjetaFruta'

const App = () => (
  <div>
    <TarjetaFruta name={'Sandia'} price={2.00} />
    <TarjetaFruta name={`Naranja`} price={1.50} />
    <TarjetaFruta name={`Manzana`} price={1.50} />
  </div>
)

export default App

