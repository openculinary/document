import * as assert from 'assert';

import { Meal } from '../document';

import { parseMeal } from './parse';

describe('parsing', function() {

  it('meal description line', function() {
    const text = '2x example-id @ 2020-09-17';
    const meal: Meal = parseMeal(text);
  });

});
