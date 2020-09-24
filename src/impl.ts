import * as semver from 'semver';

import * as prev from 'document-prev';

import { packageVersion } from './version';

export abstract class Entity {

    constructor(line: string, source: semver.SemVer) {
        if (semver.lt(source, packageVersion)) {
            const prevEntity = new prev.impl[this.constructor.name](line, source);
            const upgraded = this.upgrade(prevEntity);
            line = upgraded.emit(packageVersion);
        }
        this.parseImpl(line);
    };

    emit(target: semver.SemVer): string {
        const line = this.emitImpl();
        if (semver.lt(target, packageVersion)) {
            const prevEntity = new prev.impl[this.constructor.name]();
            const prevImpl = prevEntity.parse(line, prev.packageVersion);
            return prevImpl.emit(target);
        }
        return line;
    };

    abstract parseImpl(line: string): void;
    abstract emitImpl(): string;
    abstract upgrade(legacy: Entity);
}

/* tslint:disable:variable-name */
export class Starred extends Entity {
    recipe_id: string;

    parseImpl(line: string): void {
        const groups = line.match(/(\S+)/);
        this.recipe_id = groups[1];
    }
    emitImpl(): string {
        return `${this.recipe_id}`;
    }
    upgrade(legacy: prev.impl.Starred): Starred {
        const line = legacy.emit(prev.packageVersion);
        return new Starred(line, packageVersion);
    }
}

export class Meal extends Entity {
    id?: string;
    recipe_id: string;
    datetime: string;
    servings: number;

    parseImpl(line: string): void {
        const groups = line.match(/(\d+)x\s+(\S+)\s+@\s+(\S+)/);
        this.recipe_id = groups[2];
        this.datetime = groups[3];
        this.servings = parseInt(groups[1], 10);
    }
    emitImpl(): string {
        return `${this.servings || 1}x ${this.recipe_id} @ ${this.datetime}`;
    }
    upgrade(legacy: prev.impl.Meal): Meal {
        const line = legacy.emit(prev.packageVersion);
        return new Meal(line, packageVersion);
    }
}

export class Stock extends Entity {
    product_id: string;
    magnitude: number;
    units: string;

    parseImpl(line: string): void {
        const groups = line.match(/(\S+)/);
        this.product_id = groups[1];
    }
    emitImpl(): string {
        return `${this.product_id}`;
    }
    upgrade(legacy: prev.impl.Stock): Stock {
        const line = legacy.emit(prev.packageVersion);
        return new Stock(line, packageVersion);
    }
}
