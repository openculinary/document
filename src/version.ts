import { parse } from 'semver';

// tslint:disable-next-line:no-var-requires
const version = require('../package.json').version;

export const packageVersion = parse(version);
