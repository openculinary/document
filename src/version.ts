import { parse } from 'semver';

import * as pkg from '../package.json';

export const packageVersion = parse(pkg.version);
