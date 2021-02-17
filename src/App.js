import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Home from './screens/home'
import Search from './screens/search'
import Historic from './screens/historic'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: null,
          header: ({ navigation }) =>

            <View style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              height: 50,
              backgroundColor: "#7795c1",
              elevation: 0
            }}>

              <TouchableOpacity onPress={() => navigation.navigate("search")}>
                <Icon
                  name="search"
                  size={20}
                  color="rgba(255,255,255,0.7)"
                  style={{ marginRight: 30 }} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("historic")}>
                <Icon
                  name="history"
                  size={20}
                  color="rgba(255,255,255,0.7)"
                  style={{ marginRight: 30 }} />
              </TouchableOpacity>

            </View>
        }}
      />

      <Stack.Screen
        name="search"
        component={Search}
        options={{
          headerTitle: null,
          headerTintColor: "rgba(255,255,255,0.7)",
          headerStyle: {
            backgroundColor: "#7795c1",
            elevation: 0,
          }

        }}
      />

      <Stack.Screen
        name="historic"
        component={Historic}
        options={{
          headerTitle: null,
          headerTintColor: "rgba(255,255,255,0.7)",
          headerStyle: {
            backgroundColor: "#7795c1",
            elevation: 0
          },
         
        }}
      />

    </Stack.Navigator>

  </NavigationContainer>
)

export default App;
