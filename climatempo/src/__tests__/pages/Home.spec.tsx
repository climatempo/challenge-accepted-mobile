import React from 'react';
import { render } from '@testing-library/react-native'
import Home from '../../pages/Home';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

jest.mock('@react-native-community/netinfo', () => {
  return {
    NetInfo: jest.fn(),
  }
});

describe('Home page', () => {
  it('should be able render Home page', () => {
    const { getByPlaceholderText } = render(<Home />);

    expect(getByPlaceholderText('Encontre sua cidade')).toBeTruthy();
  })
});
