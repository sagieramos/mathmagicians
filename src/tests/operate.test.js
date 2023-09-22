import operate from '../logic/operate';

test('adds two numbers correctly', () => {
  expect(operate(2, 3, '+')).toBe('5');
});

test('subtracts two numbers correctly', () => {
  expect(operate(5, 3, '-')).toBe('2');
});

test('multiplies two numbers correctly', () => {
    expect(operate(4, 2, 'x')).toBe('8');
  });

test('divides two numbers correctly', () => {
    expect(operate(8, 2, '÷')).toBe('4');
  });
  test('handles division by zero', () => {
    expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('calculates the modulo correctly', () => {
    expect(operate(10, 3, '%')).toBe('1');
  });
  test('handles modulo when dividing by zero', () => {
    expect(operate(10, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
  test('throws an error for unknown operation', () => {
    expect(() => operate(2, 3, '&')).toThrowError("Unknown operation '&'");
  });
