import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Props, Home} from '../src/UI/screens/Home';

test('testando renderização label cidade', () => {
    const props: Props = {
        cities: [],
        items: [],
        cityName: 'cidadeTeste',
        error: false,
        isLoading: false,
        loadLocalStorageRequest() {},
        searchRequest() {},
        navigation: {
            addListener(): any {},
            canGoBack(): any {},
            closeDrawer() {},
            dangerouslyGetParent(): any {},
            dangerouslyGetState(): any {},
            dispatch() {},
            goBack() {},
            isFocused(): any {},
            jumpTo() {},
            navigate() {},
            openDrawer() {},
            removeListener() {},
            reset() {},
            setOptions() {},
            setParams() {},
            toggleDrawer() {},
        },
        loadRequest() {},
        route: {
            name: 'nome',
            key: 'nome',
        },
    };
    const {getByText} = render(<Home {...props} />);
    const cityTest = getByText('cidadeTeste');
    expect(cityTest).toBeDefined();
});

test('testando input search', () => {
    const props: Props = {
        cities: [
            {
                name: 'osasco',
                id: 1,
                state: 'sp',
            },
        ],
        items: [],
        cityName: 'cidadeTeste',
        error: false,
        isLoading: false,
        loadLocalStorageRequest() {},
        searchRequest() {},
        navigation: {
            addListener(): any {},
            canGoBack(): any {},
            closeDrawer() {},
            dangerouslyGetParent(): any {},
            dangerouslyGetState(): any {},
            dispatch() {},
            goBack() {},
            isFocused(): any {},
            jumpTo() {},
            navigate() {},
            openDrawer() {},
            removeListener() {},
            reset() {},
            setOptions() {},
            setParams() {},
            toggleDrawer() {},
        },
        loadRequest() {},
        route: {
            name: 'nome',
            key: 'nome',
        },
    };
    const {getByTestId} = render(<Home {...props} />);
    const inputSearch = getByTestId('inputSearch');
    fireEvent.changeText(inputSearch, 'osasco');
});
