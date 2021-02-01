import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentOptions,
} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Home from './UI/screens/Home';
import HistoricScreen from './UI/screens/Historic';
import {StyleProp, ViewStyle} from 'react-native';
import store from './store';
const Drawer = createDrawerNavigator();
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Home"
                    drawerStyle={styles}
                    drawerContentOptions={drawerStyle}>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen
                        name="Histórico"
                        component={HistoricScreen}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    );
};
const styles: StyleProp<ViewStyle> = {
    backgroundColor: '#181818',
};
const drawerStyle: DrawerContentOptions = {
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    activeBackgroundColor: '#303030',
};
export default App;
