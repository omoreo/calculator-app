import React from 'react'
import './Display.css'

const Display = ({ value }) => {
  const formattedValue = parseFloat(value).toLocaleString('en-US', {
    maximumFractionDigits: 9,
  });
  
  return (
    <div className="display">
        {formattedValue}
    </div>
  )
}

export default Display