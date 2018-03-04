import moment from 'moment';
import { withId } from './withId';

export function todo(item) {
  return withId({
    item,
    completed: false,
    createdDate: moment().toISOString(),
  });
}
