import 'react-native';
import React from 'react';
import CardDia from '../screens/CardDia';
import renderer from 'react-test-renderer'
import { DATAFORTEST } from '../jest/test-for-cardDia'
test('Should render CardDia component', () => {


    const snap = renderer.create(
        <CardDia dia={DATAFORTEST} />
    ).toJSON();

    expect(snap).toMatchSnapshot();
})