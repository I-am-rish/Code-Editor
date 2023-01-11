import React from 'react'
import Draggable from 'react-draggable'
import './index.css'

const PIP = ({children}) => {
  return (
    <Draggable>
        <div className='pipWindow'>{children}</div>
    </Draggable>
  )
}

export default PIP