import * as assert from 'assert';

import { Starred, Meal, Stock } from '../document';

import { parseStarred, parseMeal, parseStock } from './parse';

describe('parsing', function() {

  it('starred description line', function() {
    const text = 'test-recipe-id';
    const starred: Starred = parseStarred(text);
  });

  it('meal description line', function() {
    const text = '2x example-id @ 2020-09-17';
    const meal: Meal = parseMeal(text);
  });

  it('stock description line', function() {
    const text = 'test-product-id';
    const stock: Stock = parseStock(text);
  });

});
