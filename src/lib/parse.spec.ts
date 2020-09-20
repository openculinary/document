import * as assert from 'assert';

import { Starred, Meal, Stock } from '../types';
import { parseStarred, parseMeal, parseStock } from './parse';

describe('parsing', () => {

  it('starred description line', () => {
    const text = 'test-recipe-id';
    const starred: Starred = parseStarred(text, null);

    assert.equal(starred.recipe_id, 'test-recipe-id');
  });

  it('meal description line', () => {
    const text = '2x example-id @ 2020-09-17';
    const meal: Meal = parseMeal(text, null);

    assert.equal(meal.recipe_id, 'example-id');
  });

  it('stock description line', () => {
    const text = 'test-product-id';
    const stock: Stock = parseStock(text, null);

    assert.equal(stock.product_id, 'test-product-id');
  });

});
