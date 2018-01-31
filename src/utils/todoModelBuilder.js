import uuidv4 from 'uuid/v4';

export default function build(item) {
  return {
    id: uuidv4(),
    item,
    completed: false,
  };
}
