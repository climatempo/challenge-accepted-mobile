import React from 'react'
import 'react-native';
import { render } from '@testing-library/react-native'
import App from '../App'

it("test snapshot", () => {
    const component = render(<App />);
    expect(component.toJSON()).toMatchSnapshot();
});