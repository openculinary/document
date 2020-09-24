import * as assert from 'assert';
import * as semver from 'semver';

import * as impl from './impl';

import { packageVersion } from './version';

describe('generation', () => {

  it('starred entity to line', () => {
    const starred = new impl.Starred('test-recipe-id', packageVersion);
    const text = starred.emit(packageVersion);

    assert.equal(text, 'test-recipe-id');
  });

  it('meal entity to line', () => {
    const meal = new impl.Meal('2x example-id @ 2020-09-17', packageVersion);
    const text = meal.emit(packageVersion);

    assert.equal(text, '2x example-id @ 2020-09-17');
  });

  it('stock entity to line', () => {
    const stock = new impl.Stock('test-product-id', packageVersion);
    const text = stock.emit(packageVersion);

    assert.equal('test-product-id', text);
  });

});

describe('parsing', () => {

  it('starred description line', () => {
    const text = 'test-recipe-id';
    const version = semver.parse('1.0.0');
    const starred = new impl.Starred(text, version);

    assert.equal(starred.recipe_id, 'test-recipe-id');
  });

  it('meal description line', () => {
    const text = '2x example-id @ 2020-09-17';
    const version = semver.parse('1.0.0');
    const meal = new impl.Meal(text, version);

    assert.equal(meal.recipe_id, 'example-id');
  });

  it('stock description line', () => {
    const text = 'test-product-id';
    const version = semver.parse('1.0.0');
    const stock = new impl.Stock(text, version);

    assert.equal(stock.product_id, 'test-product-id');
  });

});
