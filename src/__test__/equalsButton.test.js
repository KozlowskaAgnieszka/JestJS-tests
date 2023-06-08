import {
  equalsButton,
  numberButtons,
  operationButtons,
  previousOperandTextElement,
  currentOperandTextElement,
} from '../__mocks__';
import { clearCurrentOperand, clearPreviousOperand } from '../script';

require('../script');

describe('equalsButton', () => {
  beforeEach(() => {
    clearCurrentOperand();
    clearPreviousOperand();
  });

  // ###
  test('displays the result', () => {
    const buttons = [
      numberButtons[1],
      operationButtons[0],
      numberButtons[0],
      equalsButton,
    ];
    buttons.forEach((button) => {
      button.click();
    });

    const result = currentOperandTextElement.textContent;

    expect(result).toBe('2');
  });

  // ###
  test('should not allow to select equal button directly after operation button ', () => {
    const buttons = [numberButtons[0], operationButtons[0], equalsButton];
    buttons.forEach((button) => {
      button.click();
    });

    const resultPreviousOperand = previousOperandTextElement.textContent;
    const resultCurrentOperand = currentOperandTextElement.textContent;

    expect(resultPreviousOperand).toBe('1/');
    expect(resultCurrentOperand).toBe('');
  });
});
