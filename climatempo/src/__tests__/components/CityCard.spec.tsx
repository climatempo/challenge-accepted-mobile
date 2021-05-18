import React from 'react';
import { render } from '@testing-library/react-native'
import CityCard from '../../components/CityCard';

const cityProps = {
  name: '',
  state: '',
  country: ''
}

describe('CityCard component', () => {
  it('should be able render CityCard component', () => {

    const card = render(
      <CityCard
        key={1}
        name={cityProps.name}
        state={cityProps.state}
        country={cityProps.country}
      />
    );

    expect(card).toBeTruthy();

  })
});
