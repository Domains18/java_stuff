import { describe, it, expect } from 'vitest';
import paymentCustomization from './index';
import { FunctionResult } from '../generated/api';

describe('payment customization function', () => {
  it('returns no operations without configuration', () => {
    const result = paymentCustomization({
      paymentCustomization: {
        metafield: null
      }
    });
    const expected: FunctionResult = { operations: [] };

    expect(result).toEqual(expected);
  });
});