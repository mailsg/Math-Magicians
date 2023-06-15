import React from 'react';
import renderer from 'react-test-renderer';
import HitTheApi from './hittheapi';

it('HitTheApi renders correctly', () => {
  const tree = renderer
    .create(<HitTheApi />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
