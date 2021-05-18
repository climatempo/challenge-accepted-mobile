import React from 'react';
import { render } from '@testing-library/react-native'
import Historic from '../../pages/Historic';

jest.mock('../../hooks/historic', () => {
  return {
    useHistoric: jest.fn(() => ({
      cleanHistoric: jest.fn(),
      loadHistoric: jest.fn(() => {
        return Promise.prototype;
      })
    })),
  }
});

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

describe('Historic page', () => {
  it('should be able render Historic page', () => {
    const { getByText } = render(<Historic />);

    expect(getByText('Limpar Histórico')).toBeTruthy();
  });
});
