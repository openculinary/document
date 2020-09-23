import * as assert from 'assert';
import * as semver from 'semver';

import * as curr from '../types';

import { parseStarred, parseMeal, parseStock } from './parse';

describe('parsing', () => {

  it('starred description line', () => {
    const text = 'test-recipe-id';
    const version = semver.parse('1.0.0');
    const starred: curr.Starred = parseStarred(text, version);

    assert.equal(starred.recipe_id, 'test-recipe-id');
  });

  it('meal description line', () => {
    const text = '2x example-id @ 2020-09-17';
    const version = semver.parse('1.0.0');
    const meal: curr.Meal = parseMeal(text, version);

    assert.equal(meal.recipe_id, 'example-id');
  });

  it('stock description line', () => {
    const text = 'test-product-id';
    const version = semver.parse('1.0.0');
    const stock: curr.Stock = parseStock(text, version);

    assert.equal(stock.product_id, 'test-product-id');
  });

});
