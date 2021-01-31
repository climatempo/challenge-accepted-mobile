import React from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';
import Card from '../../components/Card';
import Icon from 'react-native-vector-icons/Ionicons';

const Home: React.FC = ({navigation}) => {
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
                        <TextInput style={styles.input} />
                        <Icon name="search-outline" size={35} color="#fff" />
                    </View>
                    <Text style={styles.h4}>Nome cidade</Text>
                    <Card />
                </View>
            </ScrollView>
        </>
    );
};
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
        flexDirection: 'row',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '70%',
        marginRight: 5,
        color: '#fff',
    },
    h4: {
        marginTop: 10,
        marginBottom: 5,
        color: '#fff',
        fontSize: 25,
    },
});
export default Home;
