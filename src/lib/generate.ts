import { gt, SemVer } from 'semver';

import * as curr from '../types';

export function generateStarred(starred: curr.Starred, target: SemVer): string {
    return `${starred.recipe_id}`;
};

export function generateMeal(meal: curr.Meal, target: SemVer): string {
    return `${meal.servings || 1}x ${meal.recipe_id} @ ${meal.datetime}`;
};

export function generateStock(stock: curr.Stock, target: SemVer): string {
    return `${stock.product_id}`;
};
