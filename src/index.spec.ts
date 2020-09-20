import * as assert from 'assert';

import { packageVersion, types, parse, generate } from './index';

describe('library exports', () => {

  it('starred description line', () => {
    const source: types.Starred = {recipe_id: 'example-recipe-id'};
    const line = generate.generateStarred(source, packageVersion);
    const target = parse.parseStarred(line, packageVersion);

    assert.deepEqual(source, target);
  });

});
