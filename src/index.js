import React from 'react'
import ReactDOM from 'react-dom'

class TarjetaFruta extends React.Component {
  constructor () {
    super()
    this.state = {
      cantidad: 0
    }
  }


  render () {
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <p>Costo: $ {this.props.price}</p>
        <div>Cantidad: { this.state.cantidad }</div>
        <button
          onClick={() => {
            // X - Tratamos de actualizar el estado
            this.setState({ cantidad: this.state.cantidad + 1 })
          }}>
      
          Agregar
        </button>
        <hr />
      </div>
    )
  }
}

const App = () => (
  <div>
    <TarjetaFruta name={'Sandia'} price={2.00} />
    <TarjetaFruta name={`Naranja`} price={1.50} />
    <TarjetaFruta name={`Manzana`} price={1.50} />
  </div>
)


ReactDOM.render(<App />, document.getElementById('root'))
