import 'react-native';
import React from 'react';
import CityHome from '../screens/CityHome';
import renderer from 'react-test-renderer'

test('Should render CityHome component', () => {

    const idLocale = 3906

    const snap = renderer.create(
        <CityHome route={idLocale} />
    ).toJSON();

    expect(snap).toMatchSnapshot();
})