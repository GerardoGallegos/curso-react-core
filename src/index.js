import React from 'react'
import ReactDOM from 'react-dom'

class TarjetaFruta extends React.Component {

  constructor () {
    super()
    this.state = {
      cantidad: 0
    }

    const METHODS = [
      'agregar',
      'quitar',
      'limpiar'
    ]

    METHODS.forEach((method) => {
      this[method] = this[method].bind(this)
    })
  }

  agregar () {
    this.setState({ cantidad: this.state.cantidad + 1 })
  }

  quitar () {
    this.setState({ cantidad: this.state.cantidad - 1 })
  }

  limpiar () {
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
