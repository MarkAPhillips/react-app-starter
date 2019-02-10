import keyBy from 'lodash/keyBy';

const toHash = items => keyBy(items, 'id');

export default toHash;
