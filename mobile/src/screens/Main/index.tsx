import React, {useState} from 'react';
import {Card, Header, SearchInput} from '../../components';
import {useSelector} from 'react-redux';

import * as S from './styles';
import {ILocaleItem, ILocaleState} from '../../store/modules/locales/types';

const Main: React.FC = () => {
  const [toggleSearchHistory, setToggleSetSearchHistory] = useState(false);

  const {
    locales: {forecastIndex, forecastSearched, currentLocale},
  } = useSelector<{locales: ILocaleState}, ILocaleItem>((state) => state);

  return (
    <>
      <Header />
      <S.Container>
        <SearchInput
          toggleSearchHistory={toggleSearchHistory}
          setToggleSearchHistory={setToggleSetSearchHistory}
        />

        <S.Wrapper>
          {!toggleSearchHistory &&
            currentLocale &&
            forecastSearched.length > 0 && (
              <>
                <S.CurrentLocaleContainer>
                  <S.CurrentLocaleText>
                    Previsão para {currentLocale.name} - {currentLocale.state}
                  </S.CurrentLocaleText>
                </S.CurrentLocaleContainer>
                <S.ScrollView>
                  {forecastSearched[forecastIndex].data.map((item, index) => (
                    <Card
                      key={index}
                      date={item.date_br}
                      text={item.text_icon.text.phrase.reduced}
                      rain={item.rain}
                      temperature={item.temperature}
                    />
                  ))}
                </S.ScrollView>
              </>
            )}
          {forecastSearched.length === 0 && (
            <S.WithoutForecastContainer>
              <S.WithoutForecastText>Pesquise uma cidade</S.WithoutForecastText>
            </S.WithoutForecastContainer>
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Main;
