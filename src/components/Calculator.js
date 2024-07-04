// src/components/Calculator.js
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { formatNumber } from '../utils/formatNumber';
import './Calculator.css';

const MAX_DIGITS = 9;

const Calculator = () => {
  return (
    <div className="calculator">
      <Display value={"0"} />
      <ButtonPanel onButtonClick={""} />
    </div>
  );
};

export default Calculator;
