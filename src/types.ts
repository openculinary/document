import * as prev from 'document-prev';
import * as semver from 'semver';

export interface Quantity {
    magnitude: number,
    units: string,
}

export interface Ingredient {
    recipe_id: string,
    product_id: string,
    index: number,
    markup: string,
    quantity: Quantity,
}

export interface Product {
    id: string,
    category: string,
    singular: string,
    plural: string,
}

export interface Direction {
   recipe_id: string,
   index: number,
   markup: string,
}

export interface Recipe {
    id: string,
    title: string,
    image_url: string,
    time: number,
    servings: number,
    rating: number,
    domain: string,
    dst: string,
}

export interface Starred {
    recipe_id: string,
}

export interface Meal {
    id?: string,
    recipe_id: string,
    datetime: string,
    servings: number,
}

export interface Stock {
    product_id: string,
    magnitude: number,
    units: string,
}
