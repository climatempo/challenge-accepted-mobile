import React from 'react';
import { render } from '@testing-library/react-native'
import Weather from '../../pages/Weather';

describe('Weather page', () => {
  it('should be able render Weather page with route params', () => {

    const route = {
      params: {
        id: 0,
        name: '',
        state: '',
        country: ''
      }
    }

    const weatherPage = render(<Weather route={route}/>);
    expect(weatherPage).toBeTruthy();

  })
});
