import { equal } from 'assert';
import { parse as parseSemver } from 'semver';

import curr from './index';

describe('generation', () => {

  it('starred entity to line', () => {
    const starred = new curr.types.Starred('test-recipe-id', curr.packageVersion);
    const text = starred.emit(curr.packageVersion);

    equal(text, 'test-recipe-id');
  });

  it('meal entity to line', () => {
    const meal = new curr.types.Meal('2x example-id @ 2020-09-17', curr.packageVersion);
    const text = meal.emit(curr.packageVersion);

    equal(text, '2x example-id @ 2020-09-17');
  });

  it('stock entity to line', () => {
    const stock = new curr.types.Stock('test-product-id', curr.packageVersion);
    const text = stock.emit(curr.packageVersion);

    equal('test-product-id', text);
  });

});

describe('parsing', () => {

  it('starred description line', () => {
    const text = 'test-recipe-id';
    const version = parseSemver('2020.9.23');
    const starred = new curr.types.Starred(text, version);

    equal(starred.recipe_id, 'test-recipe-id');
  });

  it('meal description line', () => {
    const text = '2x example-id @ 2020-09-17';
    const version = parseSemver('2020.9.23');
    const meal = new curr.types.Meal(text, version);

    equal(meal.recipe_id, 'example-id');
  });

  it('stock description line', () => {
    const text = 'test-product-id';
    const version = parseSemver('2020.9.23');
    const stock = new curr.types.Stock(text, version);

    equal(stock.product_id, 'test-product-id');
  });

});
