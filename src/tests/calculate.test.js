import calculate from '../logic/calculate';

test('should clear the calculator when AC is pressed', () => {
  const obj = {
    total: 1,
    next: 2,
    operation: '+',
  };

  const expected = {
    total: null,
    next: null,
    operation: null,
  };

  expect(calculate(obj, 'AC')).toEqual(expected);
});

test('should add two numbers when = is pressed', () => {
  const obj = {
    total: 1,
    next: 2,
    operation: '+',
  };

  const expected = {
    total: 3,
    next: null,
    operation: null,
  };
  const received = calculate(obj, '=');
  received.total = parseFloat(received.total);
  expect(received).toEqual(expected);
});

test('should subtract two numbers when = is pressed', () => {
  const obj = {
    total: 1,
    next: 2,
    operation: '-',
  };

  const expected = {
    total: -1,
    next: null,
    operation: null,
  };

  const received = calculate(obj, '=');
  received.total = parseFloat(received.total);
  expect(received).toEqual(expected);
});

test('should multiply two numbers when = is pressed', () => {
  const obj = {
    total: 1,
    next: 2,
    operation: 'x',
  };

  const expected = {
    total: 2,
    next: null,
    operation: null,
  };

  const received = calculate(obj, '=');
  received.total = parseFloat(received.total);
  expect(received).toEqual(expected);
});

test('should divide two numbers when = is pressed', () => {
  const obj = {
    total: 1,
    next: 2,
    operation: '÷',
  };

  const expected = {
    total: 0.5,
    next: null,
    operation: null,
  };

  const received = calculate(obj, '=');
  received.total = parseFloat(received.total);
  expect(received).toEqual(expected);
});

test('should handle division by zero', () => {
  const obj = {
    total: 1,
    next: 0,
    operation: '/',
  };

  const received = calculate(obj, '=');

  expect(received).toEqual({});
});
