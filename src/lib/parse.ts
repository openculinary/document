import { Meal } from '../document';

export function parseMeal(line: string): Meal {
    return {
        recipe_id: null,
        datetime: null,
        servings: null,
    };
};
