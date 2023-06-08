import { getResult } from './calculator.js';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);

let currentOperand = [];
let previousOperand = [];

export const updateCurrentOperand = (result) => {
  currentOperand = [];
  currentOperandTextElement.textContent = result;
};

export const updatePreviousOperand = () => {
  previousOperand = [...previousOperand, ...currentOperand];
  previousOperandTextElement.textContent = previousOperand.join('');
};

export const clearCurrentOperand = () => {
  currentOperand = [];
  currentOperandTextElement.innerHTML = '';
};

export const clearPreviousOperand = () => {
  previousOperand = [];
  previousOperandTextElement.innerHTML = '';
};

export const getOperand = (button) => {
  if (button.textContent === '.' && currentOperand.includes('.')) {
    return;
  }

  currentOperand.push(button.textContent);
  const number = currentOperand.join('');
  currentOperandTextElement.innerHTML = number;
};

export const getOperation = (button) => {
  const currentIndexOfLast = currentOperand.length - 1;
  const previousIndexOfLast = previousOperand.length - 1;
  const operators = ['/', '*', '-', '+'];

  if (operators.includes(previousOperand[previousIndexOfLast])) {
    return;
  }

  if (
    (button.textContent !== '-' && currentOperand.length === 0) ||
    currentOperand[currentIndexOfLast] === '-'
  ) {
    return;
  }

  if (button.textContent === '-' && currentOperand.length === 0) {
    currentOperand.push(button.textContent);
    currentOperandTextElement.innerHTML = button.textContent;
    return;
  }

  currentOperand.push(button.textContent);
  updatePreviousOperand();
  clearCurrentOperand();
};

numberButtons?.forEach((button) => {
  button.addEventListener('click', () => getOperand(button));
});

operationButtons?.forEach((button) => {
  button.addEventListener('click', () => getOperation(button));
});

equalsButton?.addEventListener('click', () => {
  updatePreviousOperand();
  const result = getResult(previousOperand);
  updateCurrentOperand(result);
});

clearButton?.addEventListener('click', () => {
  clearCurrentOperand();
  clearPreviousOperand();
});
