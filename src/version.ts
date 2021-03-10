import { parse } from 'semver';

import pkg from '../package.json';

export const packageVersion = parse(pkg.version);
