import * as semver from 'semver';

import * as prev from 'document-prev';
import * as curr from '../types';

import { packageVersion } from '../version';

export function generateStarred(starred: curr.Starred, target: semver.SemVer): string {
    const line = `${starred.recipe_id}`;
    if (semver.lt(target, packageVersion)) {
        const prevStarred: prev.types.Starred = prev.parse.parseStarred(line, prev.packageVersion);
        return prev.generate.generateStarred(prevStarred, target);
    }
    return line;
};

export function generateMeal(meal: curr.Meal, target: semver.SemVer): string {
    return `${meal.servings || 1}x ${meal.recipe_id} @ ${meal.datetime}`;
};

export function generateStock(stock: curr.Stock, target: semver.SemVer): string {
    return `${stock.product_id}`;
};
