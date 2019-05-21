import React from 'react'
import ReactDOM from 'react-dom'

class TarjetaFruta extends React.Component {

  // Saco el state del contructor ******
  state = {
    cantidad: 0
  }

  // Usamos arrow functions como property initilizers
  // en lugar de los metodos de clase
  agregar = () => {
    this.setState({ cantidad: this.state.cantidad + 1 })
  }

  quitar = () => {
    this.setState({ cantidad: this.state.cantidad - 1 })
  }

  limpiar = () => {
    this.setState({ cantidad: 0 })
  }

  render () {
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <div>Cantidad: { this.state.cantidad }</div>
        <button
          onClick={this.agregar}
        >
          +
        </button>
         <button
          onClick={this.quitar}
        >
          -
        </button>
        <button
          onClick={this.limpiar}
        >
          Limpiar
        </button>
        <hr />
        <p>$ { this.props.price } </p>
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
