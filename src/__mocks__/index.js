import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(
  path.resolve(__dirname, '../../index.html'),
  'utf8'
);

document.body.innerHTML = html;

export const numberButtons = document.querySelectorAll('[data-number]');
export const operationButtons = document.querySelectorAll('[data-operation]');
export const equalsButton = document.querySelector('[data-equals]');
export const clearButton = document.querySelector('[data-clear]');
export const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);
export const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
