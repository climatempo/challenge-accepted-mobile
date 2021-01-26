import React, {useCallback, useState} from 'react';
import searchIcon from '../../assets/icons/search.png';
import {
  addLocaleForecastRequest,
  cleanLocaleForecastHistory,
} from '../../store/modules/locales/actions';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, Alert, Keyboard} from 'react-native';
import {ILocaleItem, ILocaleState} from '../../store/modules/locales/types';

import * as S from './styles';
import colors from '../../themes/colors';
interface ISearchInput {
  toggleSearchHistory: boolean;
  setToggleSearchHistory: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchInput: React.FC<ISearchInput> = ({
  toggleSearchHistory,
  setToggleSearchHistory,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const {
    locales: {surveyedCities},
  } = useSelector<{locales: ILocaleState}, ILocaleItem>((state) => state);

  const handleSearchLocale = useCallback(
    (city: string) => {
      try {
        if (city.length === 0) {
          return Alert.alert('Atenção', 'Por favor, me informe uma cidade');
        }
        dispatch(addLocaleForecastRequest(city));
        Keyboard.dismiss();
        setToggleSearchHistory(false);
        setSearch(city);
      } catch (err) {
        setSearch('');
      } finally {
        setLoading(false);
      }
    },
    [dispatch, setToggleSearchHistory],
  );

  const handleClearLocaleHistory = useCallback(() => {
    Alert.alert(
      'Atenção',
      'Tem certeza que deseja limpar seu histórico?',
      [
        {
          text: 'Sim',
          onPress: () => {
            dispatch(cleanLocaleForecastHistory());
            setToggleSearchHistory(false);
          },
        },
        {
          text: 'Desistir',
          onPress: () => console.log('desistir'),
        },
      ],
      {cancelable: true},
    );
  }, [dispatch, setToggleSearchHistory]);

  return (
    <>
      <S.SearchContainer>
        <S.SearchBar
          placeholder="Pesquise uma cidade"
          onChangeText={(text) => setSearch(text)}
          onFocus={() => setToggleSearchHistory(true)}
          defaultValue={search}
        />
        <S.SearchButton onPress={() => handleSearchLocale(search)}>
          <S.Icon source={searchIcon} />
        </S.SearchButton>
      </S.SearchContainer>
      {toggleSearchHistory && surveyedCities.length > 0 && (
        <S.HistoryContainer>
          <S.CleanHistoryWrapper>
            <S.HistoryTitle>Histórico de pesquisa</S.HistoryTitle>
            <S.CleanHistoryButton onPress={handleClearLocaleHistory}>
              <S.CloseICon>X</S.CloseICon>
            </S.CleanHistoryButton>
          </S.CleanHistoryWrapper>
          {surveyedCities.map((item) => (
            <S.HistoryButton
              key={item.id}
              onPress={() => {
                handleSearchLocale(item.name);
              }}>
              <S.HistoryText>{item.name}</S.HistoryText>
            </S.HistoryButton>
          ))}
        </S.HistoryContainer>
      )}
      {loading && (
        <S.LoadingWrapper>
          <ActivityIndicator size="large" color={colors['header-background']} />
        </S.LoadingWrapper>
      )}
    </>
  );
};

export default SearchInput;
