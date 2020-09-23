import { lt, SemVer } from 'semver';

import * as prev from 'document-prev';
import * as curr from '../types';

import { packageVersion } from '../version';

export function generateStarred(starred: curr.Starred, target: SemVer): string {
    const line = `${starred.recipe_id}`;
    if (lt(target, packageVersion)) {
        const prevStarred: prev.types.Starred = prev.parse.parseStarred(line, prev.packageVersion);
        return prev.generate.generateStarred(prevStarred, target);
    }
    return line;
};

export function generateMeal(meal: curr.Meal, target: SemVer): string {
    return `${meal.servings || 1}x ${meal.recipe_id} @ ${meal.datetime}`;
};

export function generateStock(stock: curr.Stock, target: SemVer): string {
    return `${stock.product_id}`;
};
