import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from './__mocks__/Navigation';

it('Navigation renders correctly', () => {
    const tree = renderer
        .create(<Navigation />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});