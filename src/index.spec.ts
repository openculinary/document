import * as assert from 'assert';
import * as semver from 'semver';

import * as curr from './index';

describe('generation', () => {

  it('starred entity to line', () => {
    const starred = new curr.impl.Starred('test-recipe-id', curr.packageVersion);
    const text = starred.emit(curr.packageVersion);

    assert.equal(text, 'test-recipe-id');
  });

  it('meal entity to line', () => {
    const meal = new curr.impl.Meal('2x example-id @ 2020-09-17', curr.packageVersion);
    const text = meal.emit(curr.packageVersion);

    assert.equal(text, '2x example-id @ 2020-09-17');
  });

  it('stock entity to line', () => {
    const stock = new curr.impl.Stock('test-product-id', curr.packageVersion);
    const text = stock.emit(curr.packageVersion);

    assert.equal('test-product-id', text);
  });

});

describe('parsing', () => {

  it('starred description line', () => {
    const text = 'test-recipe-id';
    const version = semver.parse('2020.9.23');
    const starred = new curr.impl.Starred(text, version);

    assert.equal(starred.recipe_id, 'test-recipe-id');
  });

  it('meal description line', () => {
    const text = '2x example-id @ 2020-09-17';
    const version = semver.parse('2020.9.23');
    const meal = new curr.impl.Meal(text, version);

    assert.equal(meal.recipe_id, 'example-id');
  });

  it('stock description line', () => {
    const text = 'test-product-id';
    const version = semver.parse('2020.9.23');
    const stock = new curr.impl.Stock(text, version);

    assert.equal(stock.product_id, 'test-product-id');
  });

});
