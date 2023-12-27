const Calculator = require('../calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('test_case1', () => {
    it('should return the sum of two numbers', () => {
      const result = calculator.add(2, 3);
      expect(result).toEqual(5);
    });
  });

  describe('subtract', () => {
    it('test_case2', () => {
      const result = calculator.subtract(5, 3);
      expect(result).toEqual(2);
    });
  });
});
