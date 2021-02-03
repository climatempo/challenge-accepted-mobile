import React from 'react';
import {render} from '@testing-library/react-native';
import HistoricCard from '../src/UI/components/HistoricCard';
import {Historic} from '../src/model/historic/Historic';

test('testando renderizaçõa do card', () => {
    const historicItem: Historic = {
        name: 'test',
    };
    const {getByText} = render(<HistoricCard historicItem={historicItem} />);
    const test = getByText('test');
    expect(test).toBeDefined();
});
