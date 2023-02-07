# Index Lookup

An ESM module for generating a lookup index from an array of object literals.

Made this specifically when working with MongoDB documents and pairing reference IDs between query results.

## usage

```js
import { indexLookup } from '@afoot/index-lookup';
const fetchResults = [
  {
    _id: 'abc',
    name: 'Tacos',
    ingredients: ['beans', 'cheese'],
  },
  {
    _id: 'def',
    name: 'Pizza',
    ingredients: ['tomatoes', 'cheese'],
  },
];

const lookup = indexLookup('_id', fetchResults);
console.log(lookup); // Returns ['abc','def'];
// You now have a quick lookup to find corresponding objects.
const otherResults = [
    {
      name: 'Tom',
      favoriteFoodId: 'def'
    };
  ]
const foodId = lookup.indexOf(otherResults[0].favoriteFood); // returns 1
const favoriteFoodName = fetchResults[foodId].name; // Returns `Pizza`
```

## license

[MIT](./LICENSE) © [Matthew Smith](http://www.niftinessafoot.com)

## made with ❤️ and ☕️ by

![Niftiness Afoot!](https://gist.githubusercontent.com/niftinessafoot/2dba588395cb557293d5f09aebcd2ab0/raw/770293c76bead4f0986ff959f3ea8880017d92c0/bot.svg?sanitize=true) [Matthew Smith](https://github.com/niftinessafoot)
