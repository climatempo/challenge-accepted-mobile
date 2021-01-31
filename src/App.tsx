import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentOptions,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './UI/screens/Home';
import Historic from './UI/screens/Historic';
import {StyleProp, ViewStyle} from 'react-native';
const Drawer = createDrawerNavigator();
const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerStyle={styles}
                drawerContentOptions={teste}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Histórico" component={Historic} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
const styles: StyleProp<ViewStyle> = {
    backgroundColor: '#181818',
};
const teste: DrawerContentOptions = {
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    activeBackgroundColor: '#303030',
};
export default App;
