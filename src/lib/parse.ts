import { lt, SemVer } from 'semver';

import * as prevDocument from 'document-prev';

import { Starred, Meal, Stock } from '../types';
import { packageVersion } from '../version';
import { generateStarred, generateMeal, generateStock } from './generate';

export function parseStarred(line: string, source: SemVer): Starred {
    if (lt(source, packageVersion)) {
        const prevStarred: Starred = prevDocument.parse.parseStarred(line, source);
        line = generateStarred(prevStarred, packageVersion);
    }
    const groups = line.match(/(\S+)/);
    return {
        recipe_id: groups[1],
    };
};

export function parseMeal(line: string, source: SemVer): Meal {
    const groups = line.match(/(\d+)x\s+(\S+)\s+@\s+(\S+)/);
    return {
        recipe_id: groups[2],
        datetime: groups[3],
        servings: parseInt(groups[1], 10),
    };
};

export function parseStock(line: string, source: SemVer): Stock {
    const groups = line.match(/(\S+)/);
    return {
        product_id: groups[1],
        magnitude: null,
        units: null,
    };
};
