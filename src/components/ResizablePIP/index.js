import React from 'react'
import { ResizableBox } from 'react-resizable';
import PIP from '../PIP';

import './index.css'

const ResizablePIP = ({
    children,
    width=200,
    height=200,
    minConstraints=[200, 200],
    maxConstraints=[800, 800]
}) => {
  return (
    <>
    <PIP>
        <ResizableBox
        onMouseDown={(e) =>{
          e.stopPropagation()
        }}
        className='pipResizableContent'
        width={width}
        height={height}
        minConstraints={minConstraints}
        maxConstraints={maxConstraints}
        >
            {children}
        </ResizableBox>
    </PIP>
    </>
  )
}

export default ResizablePIP;