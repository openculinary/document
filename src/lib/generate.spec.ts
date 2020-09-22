import * as assert from 'assert';

import * as curr from '../types';
import { generateStarred, generateMeal, generateStock } from './generate';

describe('generation', () => {

  it('starred entity to line', () => {
    const starred: curr.Starred = {
        recipe_id: 'test-recipe-id',
    };
    const text = generateStarred(starred, null);

    assert.equal(text, 'test-recipe-id');
  });

  it('meal entity to line', () => {
    const meal: curr.Meal = {
        recipe_id: 'example-id',
        datetime: '2020-09-17',
        servings: 2,
    };
    const text = generateMeal(meal, null);

    assert.equal(text, '2x example-id @ 2020-09-17');
  });

  it('stock entity to line', () => {
    const stock: curr.Stock = {
        product_id: 'test-product-id',
        magnitude: null,
        units: null,
    };
    const text = generateStock(stock, null);

    assert.equal('test-product-id', text);
  });

});
