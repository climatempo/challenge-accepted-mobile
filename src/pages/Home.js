import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SearchWeather } from './SearchWeather';
import { SearchHistory } from './SearchHistory';

const SearchRoute = () => <SearchWeather />;

const RecentsRoute = () => <SearchHistory/>;

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Clima', title: 'Clima', icon: 'beach' },
    { key: 'recentes', title: 'Recentes', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Clima: SearchRoute,
    recentes: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor='#fff'
      barStyle={{
        backgroundColor: '#004983'
      }}
    />
  );
};

export default Home;