import { withId } from './withId';

export function todo(item) {
  return withId({
    item,
    completed: false,
  });
}

export function form(name) {
  return withId({
    name,
    disabled: true,
  });
}
