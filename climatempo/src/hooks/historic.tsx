import React, {
  createContext,
  useCallback,
  useContext
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface City {
  id: number;
  name: string;
  state: string;
}

interface Weather {
  date_br: string;
  temperature: {
    min: number;
    max: number;
  }
  wind: {
    velocity_min: number;
    velocity_max: number;
  }
  rain: {
    probability: number;
    precipitation: number;
  }
  humidity: {
    min: number;
    max: number;
  }
  text_icon: {
    text: {
      phrase: {
        reduced: string;
      }
    }
  }
}

interface Response {
  id: number;
  name: string;
  state: string;
  country: string;

  data: Weather[];
}

interface HistoricContextData {
  saveHistoric(id:number, name:string, state:string): void;
  loadHistoric(): Promise<City[]>;
  cleanHistoric(): void;
  save(data: Weather[]): void;
  load(): Promise<Response[]>;
}

const HistoricContext = createContext<HistoricContextData>({} as HistoricContextData);

const HistoricProvider: React.FC = ({ children }) => {

  const save = useCallback(async (data: Weather[]) => {

    const oldSearchs = await load();

    if(oldSearchs){

      const newSearchs = [data, ...oldSearchs]

      await AsyncStorage.setItem(
        '@Climatempo:searchs',
        JSON.stringify(newSearchs)
      );

      return;
    }

    await AsyncStorage.setItem(
      '@Climatempo:searchs',
      JSON.stringify([data])
    );

  }, []);

  const load = useCallback(async():Promise<Response[]> => {
    const searchs = await AsyncStorage.getItem('@Climatempo:searchs');

    if(searchs){
      return JSON.parse(searchs);
    }

    return [];

  }, []);

  const saveHistoric = useCallback(async(
      id:number,
      name:string,
      state: string
    ) => {
    const newSearch = {
      id,
      name,
      state,
    }

    const oldHistoric = await loadHistoric();

    if(oldHistoric){
      const newHistoric = [newSearch, ...oldHistoric]

      await AsyncStorage.setItem(
        '@Climatempo:historic',
        JSON.stringify(newHistoric)
      );

      return;
    }

    await AsyncStorage.setItem(
      '@Climatempo:historic',
      JSON.stringify([newSearch])
    );
  }, []);

  const loadHistoric = useCallback(async():Promise<City[]> => {
    const historic = await AsyncStorage.getItem('@Climatempo:historic');

    if(historic){
      return JSON.parse(historic);
    }

    return [];

  }, []);

  const cleanHistoric = useCallback(async() => {
    await AsyncStorage.removeItem('@Climatempo:historic');
  }, []);


  return (
    <HistoricContext.Provider value={
    {
      save,
      load,
      saveHistoric,
      loadHistoric,
      cleanHistoric
    }}>
      {children}
    </HistoricContext.Provider>
  );
};

function useHistoric(): HistoricContextData {
  const context = useContext(HistoricContext);

  if (!context) {
    throw new Error('useHistoric must be used within an AuthProvider');
  }

  return context;
}

export { HistoricProvider, useHistoric };

