import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {ForecastItem} from '../../../model/forecast/ForecastItem';
import {ApplicationState} from '../../../store';
import Card from '../Card';

interface Stateprops {
    items: ForecastItem[];
}

export type Props = Stateprops;
export const CardList: React.FC<Props> = ({items}) => {
    return (
        <ScrollView style={styles.scrollView}>
            {items.map((item) => (
                <Card key={item.date} forecastItem={item} />
            ))}
        </ScrollView>
    );
};

const mapStateToProps = (state: ApplicationState) => ({
    items: state.forecast.data.items,
});

const styles = StyleSheet.create({
    scrollView: {
        width: '80%',
    },
});
export default connect(mapStateToProps)(CardList);
