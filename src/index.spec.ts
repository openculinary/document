import { equal } from 'assert';
import { parse as parseSemver } from 'semver';

import {
    packageVersion as currentVersion,
    types as currentTypes
} from './index';

describe('generation', () => {

  it('starred entity to line', () => {
    const starred = new currentTypes.Starred('test-recipe-id', currentVersion);
    const text = starred.emit(currentVersion);

    equal(text, 'test-recipe-id');
  });

  it('meal entity to line', () => {
    const meal = new currentTypes.Meal('2x example-id @ 2020-09-17', currentVersion);
    const text = meal.emit(currentVersion);

    equal(text, '2x example-id @ 2020-09-17');
  });

  it('stock entity to line', () => {
    const stock = new currentTypes.Stock('test-product-id', currentVersion);
    const text = stock.emit(currentVersion);

    equal('test-product-id', text);
  });

});

describe('parsing', () => {

  it('starred description line', () => {
    const text = 'test-recipe-id';
    const version = parseSemver('2020.9.23');
    const starred = new currentTypes.Starred(text, version);

    equal(starred.recipe_id, 'test-recipe-id');
  });

  it('meal description line', () => {
    const text = '2x example-id @ 2020-09-17';
    const version = parseSemver('2020.9.23');
    const meal = new currentTypes.Meal(text, version);

    equal(meal.recipe_id, 'example-id');
  });

  it('stock description line', () => {
    const text = 'test-product-id';
    const version = parseSemver('2020.9.23');
    const stock = new currentTypes.Stock(text, version);

    equal(stock.product_id, 'test-product-id');
  });

});
