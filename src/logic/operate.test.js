import operate from './operate';

it('adds two numbers', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

it('subtracts two numbers', () => {
  expect(operate(1, 2, '-')).toBe('-1');
});

it('multiplies two numbers', () => {
  expect(operate(1, 2, 'x')).toBe('2');
});

it('divides two numbers', () => {
  expect(operate(1, 2, '÷')).toBe('0.5');
});

it('modulos two numbers', () => {
  expect(operate(1, 2, '%')).toBe('1');
});
