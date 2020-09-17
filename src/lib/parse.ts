import { Starred, Meal, Stock } from '../document';

export function parseStarred(line: string): Starred {
    return {
        recipe_id: null,
    };
};

export function parseMeal(line: string): Meal {
    return {
        recipe_id: null,
        datetime: null,
        servings: null,
    };
};

export function parseStock(line: string): Stock {
    return {
        product_id: null,
        magnitude: null,
        units: null,
    };
};
