import React, { useCallback, useEffect, useState } from 'react';

import { useHistoric } from '../../hooks/historic';
import { useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  HistoryView,
  Touchable,
  History,
  HistoryDetails,
  CardText,
  Text,
  DeleteHistoric
} from './styles';

interface City {
  id: number;
  name: string;
  state: string;
}

const Historic: React.FC = () => {
  const { cleanHistoric, loadHistoric } = useHistoric();
  const navigation = useNavigation();

  const [ history, setHistory ] = useState<City[]>([]);

  useEffect(() => {
    loadHistoric().then((data) => {
      setHistory(data);
    })
  } , []);

  const handleClean = useCallback(() => {
    Alert.alert(
      "Limpar histórico de pesquisa",
      "Realmente deseja apagar todo seu histórico?",
      [
        {
          text: "Não",
        },
        { text: "Sim!", onPress: () => {
          setHistory([]);
          cleanHistoric();
        } }
      ]
    );
  }, []);

  const handleHistoric = useCallback((id,name,state) => {
    navigation.navigate('Weather', {
      id,
      name,
      state
    });
  }, []);


  return (
    <Container>

      <HistoryDetails>
        <Text>
          Histórico de {'\n'}
          cidades pesquisadas
        </Text>
      </HistoryDetails>

      <HistoryView>
        {history.map((h, index) => (
          <Touchable
            key={index}
            onPress={() => {handleHistoric(h.id, h.name, h.state)}}
          >
            <History>
              <CardText>{h.name}-{h.state}</CardText>
            </History>
          </Touchable>
        ))}
      </HistoryView>

      <DeleteHistoric
        onPress={handleClean}
      >
        <Text>
          Limpar Histórico
          <Icon name="trash-can" size={25} color="#fff"/>
        </Text>
      </DeleteHistoric>

    </Container>
  );
}

export default Historic;
