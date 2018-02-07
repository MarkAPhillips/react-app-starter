import { withId } from './withId';

export function todo(item) {
  return withId({
    item,
    completed: false,
  });
}
