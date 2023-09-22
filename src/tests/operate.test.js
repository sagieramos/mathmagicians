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
  
