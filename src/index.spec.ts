import * as assert from 'assert';
import { parse as parseSemVer } from 'semver';

import { packageVersion, types, parse, generate } from './index';

describe('library exports', () => {

  it('render and parse simple entity', () => {
    const source: types.Starred = {recipe_id: 'example-recipe-id'};
    const line = generate.generateStarred(source, packageVersion);
    const target = parse.parseStarred(line, packageVersion);

    assert.deepEqual(source, target);
  });

  it('parse simple entity from legacy version', () => {
    const line = 'example-recipe-id';
    const legacyVersion = parseSemVer('2020.9.17');
    const entity = parse.parseStarred(line, legacyVersion);

    assert.deepEqual(entity, {recipe_id: 'example-recipe-id'});
  });

});
