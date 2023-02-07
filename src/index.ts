type Key = string | number;
interface IndexLookup {
  (key: Key, objects: Record<Key, unknown>[]): unknown[];
}

/**
 * Generate an index of ids from an array of objects for quick lookup.
 *
 * @param key - A common key in all contained objects. Values form the array elements.
 * @param objects - An array of object literals, each with a common key property holding a unique value.
 * @returns An array of values.
 */
const indexLookup: IndexLookup = (key, objects) => {
  if (!Array.isArray(objects)) {
    throw new Error(`Supplied data is not an array.`);
  }

  const output = objects.map((obj) => obj[key]);

  if (output.some((obj) => obj === undefined)) {
    console.warn(`"${key}" is not a key in all supplied objects.`);
  }

  return output;
};

export { indexLookup };
