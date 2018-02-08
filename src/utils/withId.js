import uuidv4 from 'uuid/v4';

const withId = obj => ({ ...obj, id: uuidv4() });

export { withId };
