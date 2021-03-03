import * as prev from 'document-prev';
import * as semver from 'semver';

import { packageVersion } from './version';

export interface Quantity {
    magnitude: number,
    units: string,
}

export interface Ingredient {
    product: Product,

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
    state: string,
}

export interface Direction {
   recipe_id: string,
   index: number,
   markup: string,
}

export interface Recipe {
    id: string,

    ingredients: Ingredient[],

    author: string,
    author_url: string,
    title: string,
    image_url: string,
    time: number,
    servings: number,
    rating: number,
    domain: string,
    dst: string,
}

export abstract class Entity {

    constructor(line: string, source: semver.SemVer) {
        if (semver.lt(source, packageVersion)) {
            const prevEntity = new prev.types[this.name()](line, source);
            const upgraded = this.upgrade(prevEntity);
            line = upgraded.emit(packageVersion);
        }
        this.parseImpl(line);
    };

    emit(target: semver.SemVer): string {
        const line = this.emitImpl();
        if (semver.lt(target, packageVersion)) {
            const prevEntity = new prev.types[this.name()]();
            const prevImpl = prevEntity.parse(line, prev.packageVersion);
            return prevImpl.emit(target);
        }
        return line;
    };

    abstract name(): string; // TODO: https://github.com/openculinary/document/issues/1
    abstract parseImpl(line: string): void;
    abstract emitImpl(): string;
    abstract upgrade(legacy: prev.types.Entity);
}

/* tslint:disable:variable-name */
export class Starred extends Entity {
    recipe_id: string;

    name(): string { return 'Starred'; }
    parseImpl(line: string): void {
        const groups = line.match(/(\S+)/);
        this.recipe_id = groups[1];
    }
    emitImpl(): string {
        return `${this.recipe_id}`;
    }
    upgrade(legacy: prev.types.Starred): Starred {
        const line = legacy.emit(prev.packageVersion);
        return new Starred(line, packageVersion);
    }
}

export class Meal extends Entity {
    id?: string;
    recipe_id: string;
    datetime: string;
    servings: number;

    name(): string { return 'Meal'; }
    parseImpl(line: string): void {
        const groups = line.match(/(\d+)x\s+(\S+)\s+@\s+(\S+)/);
        this.recipe_id = groups[2];
        this.datetime = groups[3];
        this.servings = parseInt(groups[1], 10);
    }
    emitImpl(): string {
        return `${this.servings || 1}x ${this.recipe_id} @ ${this.datetime}`;
    }
    upgrade(legacy: prev.types.Meal): Meal {
        const line = legacy.emit(prev.packageVersion);
        return new Meal(line, packageVersion);
    }
}

export class Stock extends Entity {
    product_id: string;
    magnitude: number;
    units: string;

    name(): string { return 'Stock'; }
    parseImpl(line: string): void {
        const groups = line.match(/(\S+)/);
        this.product_id = groups[1];
    }
    emitImpl(): string {
        return `${this.product_id}`;
    }
    upgrade(legacy: prev.types.Stock): Stock {
        const line = legacy.emit(prev.packageVersion);
        return new Stock(line, packageVersion);
    }
}
