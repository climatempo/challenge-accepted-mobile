import * as React from 'react';
import { Avatar, Card, Paragraph, List, Colors  } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="thermometer" style={{backgroundColor: "#004983"}}/>

const WeatherCard = (props) => (
  <Card style={styles.card}>
    <Card.Title title={props.date} subtitle={props.city} left={LeftContent} />
    <Paragraph style={styles.mainParagraph}>{props.text + '.'}</Paragraph>
    <Card.Content style={styles.content}>     
      <List.Icon color={Colors.blue500} icon="thermometer-chevron-up" /><Paragraph style={styles.paragraph}>{`${props.temperature.min}º`}</Paragraph>
      <List.Icon color={Colors.blue500} icon="thermometer-chevron-down" /><Paragraph style={styles.paragraph}>{`${props.temperature.max}º`}</Paragraph>
      <List.Icon color={Colors.blue500} icon="weather-windy" /><Paragraph style={styles.paragraph}>{`${props.wind.velocity_avg} km/h`}</Paragraph>   
    </Card.Content>
    <Card.Content style={styles.content}>  
      <List.Icon color={Colors.blue500} icon="weather-pouring" /><Paragraph style={styles.paragraph}>{`${props.rain.precipitation}mm`}</Paragraph>
      <List.Icon color={Colors.blue500} icon="water-percent" /><Paragraph style={styles.paragraph}>{`${props.humidity.min}↓ %`}</Paragraph>
      <List.Icon color={Colors.blue500} icon="water-percent" /><Paragraph style={styles.paragraph}>{`${props.humidity.max}↑ %`}</Paragraph>
    </Card.Content>
  </Card>
);


const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: '5% 5% 10% 5%'
  },
  mainParagraph: {
    marginLeft: '5%',
    fontWeight: "800"
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center'
  },
  paragraph:{
    marginTop: '5%',
    marginLeft: '-2%'
  }
});


export default WeatherCard;