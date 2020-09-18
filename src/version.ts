import { parse, SemVer } from 'semver';

const version: SemVer = require('../package.json').version;

export const packageVersion = parse(version);
