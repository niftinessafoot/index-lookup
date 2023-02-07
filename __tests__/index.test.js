import { indexLookup } from '../src/index';
import { _C } from '../constants.js';

describe('IndexLookup', () => {
  let key;
  let data;
  let expectedOutput;

  beforeEach(() => {
    key = 'id';
    data = [
      {
        id: 'one',
        name: 'Tacos',
      },
      {
        id: 'two',
        name: 'Pizza',
      },
    ];
    expectedOutput = ['one', 'two'];
  });

  it('should return an array of the `id` values', () => {
    const lookup = indexLookup(key, data);
    expect(lookup).toEqual(expect.arrayContaining(expectedOutput));
  });

  it('should return an array of `undefined` if the key does not exist in data', () => {
    key = 'noop';
    expectedOutput = [undefined, undefined];

    const warn = jest.spyOn(console, 'warn').mockImplementation(() => true);
    const lookup = indexLookup(key, data);
    expect(warn).toHaveBeenCalledWith(`"${key}" ${_C.ErrorNoKey}`);
    expect(lookup).toEqual(expect.arrayContaining(expectedOutput));
  });

  it('should throw an error if `data` is not an array', () => {
    data = 'one';

    const lookup = () => {
      indexLookup(key, data);
    };

    expect(lookup).toThrow(_C.ErrorNotArray);
  });
});
