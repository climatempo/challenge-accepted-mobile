import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Props, HistoricScreen} from '../src/UI/screens/Historic';

test('testando btn remove', () => {
    let removePressed = false;
    const props: Props = {
        historic: [],
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
        removeHistoricRequest() {
            removePressed = true;
        },
        route: {
            name: 'nome',
            key: 'nome',
        },
    };
    const {getByTestId} = render(<HistoricScreen {...props} />);
    const test = getByTestId('btnRemove');
    fireEvent.press(test);
    expect(removePressed).toBeTruthy();
});
