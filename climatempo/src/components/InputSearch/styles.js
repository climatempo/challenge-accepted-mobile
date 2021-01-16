import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderColor: 'blue',
    backgroundColor: '#fff'
  },
  searchBar: {
    height: '100%',
    width: 330,
    fontSize: 22,
    fontFamily: 'Roboto',
    paddingHorizontal: 10,
    color: '#777777'
  },
  searchButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
