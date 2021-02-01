import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HistoricCard from '../../components/HistoricCard';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {ApplicationState} from '../../../store/index';
import {Historic} from '../../../model/Historic';
import * as historicActions from '../../../store/ducks/historic/actions';
import {DrawerScreenProps} from '@react-navigation/drawer';

interface StateProps {
    historic: Historic[];
}
interface DispatchProps {
    loadRequest(): void;
}

type Props = StateProps & DispatchProps & DrawerScreenProps<{}>;
const HistoricScreen: React.FC<Props> = ({
    navigation,
    historic,
    loadRequest,
}) => {
    return (
        <>
            <StatusBar backgroundColor="#181818" barStyle="default" />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.header}>
                        <Icon
                            name="menu-outline"
                            size={40}
                            color="#fff"
                            onPress={() => navigation.openDrawer()}
                        />
                        <View style={styles.btnRemove}>
                            <Icon
                                name="trash-outline"
                                color="#cf1a1a"
                                size={35}
                            />
                        </View>
                    </View>
                    <Text style={styles.h4}>Histórico de Pesquisa</Text>
                    <HistoricCard />
                </View>
            </ScrollView>
        </>
    );
};
const mapStateToProps = (state: ApplicationState) => ({
    historic: state.historic.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(historicActions, dispatch);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181818',
    },
    body: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
    btnRemove: {
        alignSelf: 'flex-end',
    },
    h4: {
        color: '#fff',
        fontSize: 25,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoricScreen);
