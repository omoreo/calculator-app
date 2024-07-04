// Calculator.js
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './Calculator.css';

const Calculator = () => {
    const [value, setValue] = useState("0");

    const handleClick = (value) => {
        console.log(value);
    };

    return (
        <div className="calculator">
            <Display value={value} />
            <ButtonPanel onButtonClick={handleClick} />
        </div>
    );
};

export default Calculator;
