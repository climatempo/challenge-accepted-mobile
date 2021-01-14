import 'react-native';
import React from 'react';
import Search from '../screens/Search';
import renderer from 'react-test-renderer'

test('Should render Search component', () => {
    const snap = renderer.create(
        <Search />
    ).toJSON();

    expect(snap).toMatchSnapshot();
})

