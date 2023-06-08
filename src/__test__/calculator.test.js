
import { getResult } from '../calculator';

// GetResult()
describe('getResult()', () => {
  //   ###
  test('properly add and subtracts two numbers', () => {
    const add = ['2', '+', '4'];
    const substract = ['4', '-', '2'];

    const getAddResult = getResult(add);
    const getSubstractResult = getResult(substract);

    const addResult = 6;
    const subtractResult = 2;

    expect(getAddResult).toBe(addResult);
    expect(getSubstractResult).toBe(subtractResult);
  });

  //   ###
  test('properly multiply and divides two numbers', () => {
    const multiply = ['4', '*', '2'];
    const divide = ['4', '/', '2'];

    const getMultiplyResult = getResult(multiply);
    const getDividingResult = getResult(divide);

    const multiplyResult = 8;
    const divideResult = 2;

    expect(getMultiplyResult).toBe(multiplyResult);
    expect(getDividingResult).toBe(divideResult);
  });

  //   ###
  test('properly multiply two numbers by 0', () => {
    const multiplyBy0 = ['4', '*', '0'];

    const getMultiplyBy0Result = getResult(multiplyBy0);

    const multiplyBy0Result = 0;

    expect(getMultiplyBy0Result).toBe(multiplyBy0Result);
  });

  //   ###
  test('show an error when dividing by 0', () => {
    const divideBy0 = ['4', '/', '0'];

    const getDivideBy0Result = getResult(divideBy0);

    const divideBy0Result = 'error';

    expect(getDivideBy0Result).toBe(divideBy0Result);
  });

  //   ###
  test('properly take more than one operation with addition/substraction', () => {
    const operation = ['4', '+', '2', '-', '1'];

    const getOperationResult = getResult(operation);

    const result = 5;

    expect(getOperationResult).toBe(result);
  });

  //   ###
  test('properly take more than one operation with multiplication/division', () => {
    const multiplyOperation = ['4', '+', '2', '*', '2'];
    const divideOperation = ['4', '-', '2', '/', '2'];

    const getMyltiplyResult = getResult(multiplyOperation);
    const getDivideResult = getResult(divideOperation);

    const multiplyResult = 8;
    const divideResult = 3;

    expect(getMyltiplyResult).toBe(multiplyResult);
    expect(getDivideResult).toBe(divideResult);
  });

  //   ###
  test('properly adds/subtracts negative numbers', () => {
    const addNegative = ['-4', '+', '2'];
    const substractNegative = ['-4', '-', '2'];

    const getaddNegativeResult = getResult(addNegative);
    const getsubstractNegativeResult = getResult(substractNegative);

    const addNegativeResult = -2;
    const subtractNegativeResult = -6;

    expect(getaddNegativeResult).toBe(addNegativeResult);
    expect(getsubstractNegativeResult).toBe(subtractNegativeResult);
  });

  test('properly muliplies/divides negative numbers', () => {
    const multiplyNegative = ['-4', '*', '2'];
    const divideNegative = ['-4', '/', '2'];

    const getmultiplyNegativeResult = getResult(multiplyNegative);
    const getdivideNegativeResult = getResult(divideNegative);

    const multiplyNegativeResult = -8;
    const divideNegativeResult = -2;

    expect(getmultiplyNegativeResult).toBe(multiplyNegativeResult);
    expect(getdivideNegativeResult).toBe(divideNegativeResult);
  });
});
