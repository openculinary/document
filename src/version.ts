import { parse } from 'semver';

const version = require('../package.json').version;

export const packageVersion = parse(version);
