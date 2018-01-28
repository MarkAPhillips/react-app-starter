import renderer from 'react-test-renderer';

export const componentSnapshotShouldMatch = (component) => {
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
};
