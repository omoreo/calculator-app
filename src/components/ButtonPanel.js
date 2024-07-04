import React from 'react'
import Button from './Button'
import './ButtonPanel.css'

const ButtonPanel = ({ onButtonClick, clearButton }) => {
    const buttons = [
        { value: 'AC', className: "special" },
        { value: '+/-', className: "special" },
        { value: '%', className: "special" },
        { value: '÷', className: "operator" },

        { value: '7', className: "number" },
        { value: '8', className: "number" },
        { value: '9', className: "number" },
        { value: '×', className: "operator" },

        { value: '4', className: "number" },
        { value: '5', className: "number" },
        { value: '6', className: "number" },
        { value: '-', className: "operator" },

        { value: '1', className: "number" },
        { value: '2', className: "number" },
        { value: '3', className: "number" },
        { value: '+', className: "operator" },

        { value: '0', className: "number double" },
        { value: '.', className: "number" },
        { value: '=', className: "operator" },
    ]

  return (
    <div className="button-panel">
        {buttons.map((btn) => (
            <Button 
                key={btn.value} 
                value={btn.value} 
                onClick={() => onButtonClick(btn.value)} 
                className={btn.className}
            />
        ))}
    </div>
  )
}

export default ButtonPanel