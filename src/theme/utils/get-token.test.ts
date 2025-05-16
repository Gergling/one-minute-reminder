import { getToken } from "./get-token";

describe('getToken', () => {
  describe('Valid paths', () => {
    it('should return a property for a simple path', () => {
      expect(getToken('a', { a: 'color-for-a' })).toBe('color-for-a');
    });
    it('should return a property for a complex path', () => {
      expect(getToken('a.b', { a: { b: 'color-for-b' } })).toBe('color-for-b');
    });
  });

  describe('Invalid paths', () => {
    it('should throw if the path does not have a property', () => {
      expect(() => getToken('invalid', { a: 'valid' })).toThrow(`No child property for 'invalid'.`);
    });
  });
});
