import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import CardList from '../../components/cardList';
import SearchBar from '../../components/searchBar';
 
 const Home = () => {

   return (
       <View>
            <SearchBar></SearchBar>
            <ScrollView>
              <CardList></CardList>
            </ScrollView>
       </View>
      );
 };

export default Home;
 