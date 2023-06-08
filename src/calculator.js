let result;

export const getResult = (previousOperand) => {
  const indexOfLast = previousOperand.length - 1;
  const operationsList = ['/', '*', '-', '+'];

  if (operationsList.includes(previousOperand[indexOfLast])) {
    return;
  }

  if (previousOperand.includes('/') && previousOperand[indexOfLast] === '0') {
    result = 'error';
  } else {
    result = eval(previousOperand.join(''));
  }
  return result;
};
