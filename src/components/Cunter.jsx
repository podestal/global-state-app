import React, { useState, useReducer } from 'react'
import counterReducer from '../reducers/counterReducer'

const Cunter = () => {

    const [value, dispatch] = useReducer(counterReducer, 0)

  return (
    <div>
        <h1>Counter: ({value})</h1>
        <button
            onClick={() => dispatch({ type: "INCREMENT" })}
        >
            Increment
        </button>
        <button
            onClick={() => dispatch({ type: "RESET" })}
        >
            Reset
        </button>
        <button
            onClick={() => dispatch({ type: 'DECREMENT' })}
        >
            Decrement
        </button>
    </div>
  )
}

export default Cunter