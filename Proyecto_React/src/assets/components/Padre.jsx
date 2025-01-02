import React from 'react'
import Hijo from './Hijo'
import ReactDOM from'react-dom'

const Padre = (props) => {
    const nombre = "Juan"
  return (
    <div>
        <h5>{nombre}</h5>
        {props.autor}
    </div>
  )
}

export default Padre
