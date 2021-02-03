import React from 'react';
import {render} from '@testing-library/react-native';
import {CardList, Props} from '../src/UI/components/CardList';

test('testando renderização do card list', () => {
    const props: Props = {
        items: [
            {
                date: '20/05/2001',
                humidity: 5,
                rain: 6,
                temperatureMax: 35,
                temperatureMin: 22,
                text: 'test',
                windVelocity: 15,
            },
        ],
    };
    const {getByText} = render(<CardList {...props} />);

    const checkCard = getByText('20/05/2001');
    expect(checkCard).toBeDefined();
});
