import AsyncStorage from '@react-native-async-storage/async-storage';
import {Historic} from '../../model/historic/Historic';

export class HistoricProvider {
    localStorageKey = 'historicKey';
    async getHistoric(): Promise<Historic[]> {
        const json = await AsyncStorage.getItem(this.localStorageKey);
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
}
