import { Starred, Meal, Stock } from '../document';

export function parseStarred(line: string): Starred {
    const groups = line.match(/(\S+)/);
    return {
        recipe_id: groups[1],
    };
};

export function parseMeal(line: string): Meal {
    const groups = line.match(/(\d+)x\s+(\S+)\s+@\s+(\S+)/);
    return {
        recipe_id: groups[2],
        datetime: groups[3],
        servings: parseInt(groups[1]),
    };
};

export function parseStock(line: string): Stock {
    const groups = line.match(/(\S+)/);
    return {
        product_id: groups[1],
        magnitude: null,
        units: null,
    };
};
