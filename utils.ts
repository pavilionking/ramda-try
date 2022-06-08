import * as R from 'ramda';

export const isBlank = R.anyPass([R.isNil, R.isEmpty]);

export const isNotBlank = R.complement(isBlank);
