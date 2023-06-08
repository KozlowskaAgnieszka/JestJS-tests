import {
  clearButton,
  currentOperandTextElement,
  previousOperandTextElement,
} from '../__mocks__';

require('../script');

describe('clearButton', () => {
  beforeEach(() => {
    currentOperandTextElement.innerHTML = '123';
    previousOperandTextElement.innerHTML = '456';
  });

  // ###
  test('clears all Text Elements', () => {
    clearButton.click();

    const clearedCurrentOperand = currentOperandTextElement.textContent;
    const clearedPreviousOperand = previousOperandTextElement.textContent;

    expect(clearedCurrentOperand).toBe('');
    expect(clearedPreviousOperand).toBe('');
  });
});
