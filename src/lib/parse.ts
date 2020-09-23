import * as semver from 'semver';

import * as prev from 'document-prev';
import * as curr from '../types';

import { packageVersion } from '../version';
import { generateStarred, generateMeal, generateStock } from './generate';

export function parseStarred(line: string, source: semver.SemVer): curr.Starred {
    if (semver.lt(source, packageVersion)) {
        const prevStarred: prev.types.Starred = prev.parse.parseStarred(line, source);
        return curr.upgradeStarred(prevStarred);
    }
    const groups = line.match(/(\S+)/);
    return {
        recipe_id: groups[1],
    };
};

export function parseMeal(line: string, source: semver.SemVer): curr.Meal {
    const groups = line.match(/(\d+)x\s+(\S+)\s+@\s+(\S+)/);
    return {
        recipe_id: groups[2],
        datetime: groups[3],
        servings: parseInt(groups[1], 10),
    };
};

export function parseStock(line: string, source: semver.SemVer): curr.Stock {
    const groups = line.match(/(\S+)/);
    return {
        product_id: groups[1],
        magnitude: null,
        units: null,
    };
};
