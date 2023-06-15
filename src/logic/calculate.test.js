import calculate from './calculate';

describe('calculate', () => {
  it('set the screen to 0', () => {
    const result = calculate({ total: null, next: null, operation: null }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('add 2 numbers', () => {
    const result = calculate({ total: '1', next: '2', operation: '+' }, '=');
    expect(result).toEqual({ total: '3', next: null, operation: null });
  });

  it('subtract 2 numbers', () => {
    const result = calculate({ total: '1', next: '2', operation: '-' }, '=');
    expect(result).toEqual({ total: '-1', next: null, operation: null });
  });

  it('multiply 2 numbers', () => {
    const result = calculate({ total: '1', next: '2', operation: 'x' }, '=');
    expect(result).toEqual({ total: '2', next: null, operation: null });
  });

  it('divide 2 numbers', () => {
    const result = calculate({ total: '1', next: '2', operation: '÷' }, '=');
    expect(result).toEqual({ total: '0.5', next: null, operation: null });
  });
});
