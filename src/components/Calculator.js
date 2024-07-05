// Calculator.js
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './Calculator.css';

const MAX_DIGITS = 9;
const MAX_VALUE = 999999999;

const Calculator = () => {
    const [value, setValue] = useState("0");
    const [waitingForOperand, setWaitingForOperand] = useState(false)
    const [operator, setOperator] = useState(null)
    const [storedValue, setStoredValue] = useState(null);

    const handleClick = (btnValue) => {

        const calculate = (leftOperand, rightOperand, operator) => {
            switch(operator) {
                case '+':
                    return leftOperand + rightOperand;
                case '-':
                    return leftOperand - rightOperand;
                case '×':
                    return leftOperand * rightOperand;
                case '÷':
                    return rightOperand !== 0 ? leftOperand / rightOperand : 0;
                default:
                    return rightOperand;
            }
        }

        if(btnValue === 'AC') {
            setValue('0');
            setWaitingForOperand(false)
            setOperator(null)
            setStoredValue(null)
            return;
        }
        
        //handle number
        if(waitingForOperand) {
            setValue(btnValue);
            setWaitingForOperand(false);
        } else {
            setValue((previousValue) => {
               if(previousValue === "0") {
                return btnValue;
               }

               const newValue = previousValue + btnValue;
                if(newValue.length > MAX_DIGITS) {
                    return previousValue;
                }
                
               const numericValue = parseFloat(newValue);
                if(numericValue > MAX_VALUE) {
                    return previousValue;
                }

               return newValue;
            });
        }

        //handle operators
        if(['+', '-', '×', '÷'].includes(btnValue)) {
            if(storedValue && operator && !waitingForOperand) {
                const result = calculate(parseFloat(storedValue), parseFloat(value), operator);
                setValue(result.toString());
                setStoredValue(result.toString());
            } else {
                setStoredValue(value);
            }
            setOperator(btnValue);
            setWaitingForOperand(true);
            return;
        }

        //handle equal
        if(btnValue === '=') {
            if(operator && storedValue) {
                const result = calculate(parseFloat(storedValue), parseFloat(value), operator);
                setValue(result.toString());
                setStoredValue(null);
                setOperator(null);
                setWaitingForOperand(false);
            }
            return;
        }

        //handle decimal point
        if(btnValue === '.') {
            if(value !== "0" && !value.includes('.')) {
                setValue((previousValue) => previousValue + btnValue);
            }
            return;
        }

        //handle percent
        if(btnValue === '%') {
            setValue((previousValue) => (parseFloat(previousValue) / 100).toString());
            return;
        }

        //handle negation
        if(btnValue === '+/-') {
            setValue((previousValue) => (parseFloat(previousValue) * -1).toString());
            return;
        }
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
