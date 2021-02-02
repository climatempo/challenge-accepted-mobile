import AsyncStorage from '@react-native-async-storage/async-storage';
import {Historic} from '../../model/historic/Historic';

export class HistoricProvider {
    async getHistoric(): Promise<Historic[]> {
        const json = await AsyncStorage.getItem('historicKey');
        if (json === null) {
            return [];
        }
        const parsedJson = JSON.parse(json);
        if (Array.isArray(parsedJson)) {
            return parsedJson.map((historic) => ({name: historic.name}));
        } else {
            throw new Error('invalid json');
        }
    }

    async setHistoric(historic: Historic): Promise<void> {
        let json = await AsyncStorage.getItem('historicKey');
        if (json === null) {
            json = '[]';
        }
        const parsedJson = JSON.parse(json);
        parsedJson.unshift(historic);
        await AsyncStorage.setItem('historicKey', JSON.stringify(parsedJson));
    }

    async removeHistoric(): Promise<void> {
        await AsyncStorage.setItem('historicKey', '[]');
    }
}
