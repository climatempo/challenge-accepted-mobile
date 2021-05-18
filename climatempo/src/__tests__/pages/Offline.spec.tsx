import React from 'react';
import { render } from '@testing-library/react-native'
import Offline from '../../pages/Offline';

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

jest.mock('../../hooks/historic', () => {
  return {
    useHistoric: jest.fn(() => ({
      load: jest.fn(() => {
        return Promise.prototype;
      })
    })),
  }
});

describe('Offline page', () => {
  it('should be able render Offline page', () => {
    const offlinePage = render(<Offline />);

    expect(offlinePage).toBeTruthy();
  });
});
