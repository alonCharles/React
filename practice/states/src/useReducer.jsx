import { useReducer } from "react";
import React from 'react'

function UseReduce() {
   const [state, dispatch] = useReducer((state, action)=>{
    switch(action.type) {
        case "SET_NAME":
            return {...state, name:action.payload}
    }
   }, {
        names:[],
        name:","
    })
  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={e => dispatch({type:"SET_NAME", payload:e.target.value})}>
        </input>
        <div>Name = {state.name}</div>
    </div>
  )
}

export default UseReduce
