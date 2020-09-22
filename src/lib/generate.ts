import { gt, SemVer } from 'semver';

import { Starred, Meal, Stock } from '../types';

export function generateStarred(starred: Starred, target: SemVer): string {
    return `${starred.recipe_id}`;
};

export function generateMeal(meal: Meal, target: SemVer): string {
    return `${meal.servings || 1}x ${meal.recipe_id} @ ${meal.datetime}`;
};

export function generateStock(stock: Stock, target: SemVer): string {
    return `${stock.product_id}`;
};
