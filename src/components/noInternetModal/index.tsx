import React from 'react';
import * as S from './styles';

const NoInternetModal = ({ show, closeModal }: any) => {
  return (
      <S.Modal visible={show} >
        <S.View>
          <S.Text>Erro de conexão</S.Text>
          <S.TextDescription>
            Seu dispositivo não está conectado à internet.
          </S.TextDescription>
          <S.Button onPress={closeModal}></S.Button>
          <S.ButtonText>Fechar</S.ButtonText>
        </S.View>
      </S.Modal>
  )
};

export default NoInternetModal;
