import { Starred, Meal, Stock } from '../document';

export function generateStarred(starred: Starred): string {
    return `${starred.recipe_id}`;
};

export function generateMeal(meal: Meal): string {
    return `${meal.servings || 1}x ${meal.recipe_id} @ ${meal.datetime}`;
};

export function generateStock(stock: Stock): string {
    return `${stock.product_id}`;
};
