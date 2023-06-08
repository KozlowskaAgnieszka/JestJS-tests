import {
  numberButtons,
  operationButtons,
  currentOperandTextElement,
  previousOperandTextElement,
} from '../__mocks__';
import { clearCurrentOperand, clearPreviousOperand } from '../script';

require('../script');

describe('operationButtons', () => {
  beforeEach(() => {
    clearCurrentOperand();
    clearPreviousOperand();
  });

  // ###
  test('displays properly operation value after user click', () => {
    const buttons = [numberButtons[0], operationButtons[0]];
    buttons.forEach((button) => {
      button.click();
    });

    const result = previousOperandTextElement.textContent;

    expect(result).toBe('1/');
  });

  // ###
  test('allows to choose only one operation button in a row', () => {
    const buttons = [
      numberButtons[0],
      operationButtons[0],
      operationButtons[0],
    ];
    buttons.forEach((button) => {
      button.click();
    });

    const resultPreviousOperand = previousOperandTextElement.textContent;

    expect(resultPreviousOperand).toBe('1/');
  });

  // ###
  test('should not allow to select operation as a first input', () => {
    const buttons = [operationButtons[0], numberButtons[0]];
    buttons.forEach((button) => {
      button.click();
    });

    const resultCurrentOperand = currentOperandTextElement.textContent;

    expect(resultCurrentOperand).toBe('1');
  });
});
