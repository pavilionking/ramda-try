import * as R from 'ramda';
import { isBlank, isNotBlank } from './utils';

const validateInventoryReserve = (item: any, list: any) => {
  if (R.any(isBlank, [item, list])) return true;

  if (R.complement(R.pathEq)([0, 'item_code'], item.item_code, list))
    return false;

  // 1个inv_code,1个inv_id
  let batch_lines = R.filter(
    R.anyPass([
      R.propEq('production_batch_number', item.production_batch_number),
      R.propSatisfies(isBlank, 'production_batch_number'),
    ])
  )(list);
  if (isBlank(batch_lines)) return false;

  return true;
};

const item = { item_code: '123', production_batch_number: '123' };
const list = [{ item_code: '123', production_batch_number: '12' }];

const res = validateInventoryReserve(item, list);
console.log(res);
