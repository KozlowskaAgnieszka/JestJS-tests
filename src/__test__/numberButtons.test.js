import {
  numberButtons,
  operationButtons,
  currentOperandTextElement,
  previousOperandTextElement,
} from '../__mocks__';
import { clearCurrentOperand, clearPreviousOperand } from '../script';

require('../script.js');

describe('numberButtons', () => {
  beforeEach(() => {
    clearCurrentOperand();
    clearPreviousOperand();
  });

  // ###
  test('renders a buttons with data-number element', () => {
    expect(numberButtons).not.toBeNull();
    expect(numberButtons).toHaveLength(11);
  });

  // ###
  test('get a numberButton values', () => {
    const buttonsValues = [];
    numberButtons.forEach((button) => {
      buttonsValues.push(button.textContent);
    });

    const expectedResult = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '.',
    ];

    expect(buttonsValues).toEqual(expectedResult);
  });

  // ###
  test('displays properly number button value after user click', () => {
    const numberOneButton = numberButtons[0];
    numberOneButton.click();

    const result = currentOperandTextElement.textContent;
    expect(result).toBe('1');
  });

  // ###
  test('displays properly multi-digits numbers', () => {
    numberButtons.forEach((button) => {
      button.click();
    });

    const result = currentOperandTextElement.textContent;

    expect(result).toBe('1234567890.');
  });

  // ###
  test('allows to insert only one dot in the number', () => {
    const buttons = [
      numberButtons[0],
      numberButtons[10],
      numberButtons[10],
      numberButtons[4],
    ];
    buttons.forEach((button) => {
      button.click();
    });

    const result = currentOperandTextElement.textContent;

    expect(result).toBe('1.5');
  });

  // ###
  test('should allow to select first negative number ', () => {
    const buttons = [
      operationButtons[2],
      numberButtons[0],
      operationButtons[0],
    ];
    buttons.forEach((button) => {
      button.click();
    });

    const resultPreviousOperand = previousOperandTextElement.textContent;
    const resultCurrentOperand = currentOperandTextElement.textContent;

    expect(resultPreviousOperand).toBe('-1/');
    expect(resultCurrentOperand).toBe('');
  });
});
