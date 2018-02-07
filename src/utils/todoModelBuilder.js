import { withId } from './withId';

export default function build(item) {
  return withId({
    item,
    completed: false,
  });
}
