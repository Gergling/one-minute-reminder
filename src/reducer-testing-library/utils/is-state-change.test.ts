import { isStateChange } from "./is-state-change";
import { simpleMockModelCaseValues } from "./mock-data";

describe('isStateChange', () => {
  it('should return false in identical primitives and objects with the same reference', () => {
    const symbol = Symbol('one');
    const fnc = () => {};
    expect(isStateChange(0, 0)).toBe(false);
    expect(isStateChange(1, 1)).toBe(false);
    expect(isStateChange(false, false)).toBe(false);
    expect(isStateChange(true, true)).toBe(false);
    expect(isStateChange(fnc, fnc)).toBe(false);
    expect(isStateChange(simpleMockModelCaseValues, simpleMockModelCaseValues)).toBe(false);
    expect(isStateChange('', '')).toBe(false);
    expect(isStateChange('string', 'string')).toBe(false);
    expect(isStateChange(symbol, symbol)).toBe(false);
    expect(isStateChange(undefined, undefined)).toBe(false);
    expect(isStateChange(null, null)).toBe(false);
  });

  it('should return false in identical primitives and objects with the same reference', () => {
    expect(isStateChange(0, 1)).toBe(true);
    expect(isStateChange(1, 0)).toBe(true);
    expect(isStateChange(false, true)).toBe(true);
    expect(isStateChange(true, false)).toBe(true);
    expect(isStateChange(() => {}, () => {})).toBe(true);
    expect(isStateChange('string', '')).toBe(true);
    expect(isStateChange('', 'string')).toBe(true);
    expect(isStateChange(Symbol('one'), Symbol('one'))).toBe(true);
    expect(isStateChange<undefined | number>(undefined, 1)).toBe(true);
    expect(isStateChange<undefined | number>(1, undefined)).toBe(true);
    expect(isStateChange<undefined | null>(undefined, null)).toBe(true);
    expect(isStateChange<undefined | null>(null, undefined)).toBe(true);
  });

  it('should return false if the change property values are equal to the state property values', () => {
    expect(isStateChange({ }, { })).toBe(false);
    expect(isStateChange({ x: 1 }, { x: 1, y: null, z: 'string' })).toBe(false);
    expect(isStateChange({ x: 1, y: null }, { x: 1, y: null, z: 'string' })).toBe(false);
    expect(isStateChange({ x: 1, z: 'string' }, { x: 1, y: null, z: 'string' })).toBe(false);
  });

  it('should return true for any object property value differences', () => {
    expect(isStateChange({ x: 2 }, { x: 1, y: null, z: 'string' })).toBe(true);
  });
});
