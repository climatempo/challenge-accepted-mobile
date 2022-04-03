import React from 'react';
import { Modal } from 'react-native'
import * as S from './styles';

const NoInternetModal = ({ show, closeModal }: any) => {
  return (
    <S.Container>
      <Modal animationType={'slide'} transparent={true} visible={show} >
        <S.Container>
          <S.ModalView>
            <S.Text>Erro de conexão</S.Text>
            <S.TextDescription>
              Seu dispositivo não está conectado à internet.
            </S.TextDescription>
            <S.Button onPress={closeModal}>
              <S.ButtonText>Fechar</S.ButtonText>
            </S.Button>
          </S.ModalView>
        </S.Container>
      </Modal>
    </S.Container>
  )
};

export default NoInternetModal;
