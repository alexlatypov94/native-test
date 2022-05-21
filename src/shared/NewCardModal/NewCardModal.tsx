import React from 'react';
import {Alert, Modal, TouchableWithoutFeedback} from 'react-native';
import {useInput} from '../../hooks';
import {
  FormWrapper,
  ModalContainer,
  ModalWrapper,
  OutsideView,
  Row,
  Title,
} from '../../layouts';
import {TouchableText} from '../../layouts/TouchableText';
import {createCard, validateForm} from '../../utils';
import {Input} from '../Input';
import {AddCardBtn} from './styles';

interface NewCardModalProps {
  isVisible: boolean;
  onCloseModal: () => void;
}

export const NewCardModal: React.FC<NewCardModalProps> = React.memo(
  ({isVisible, onCloseModal}: NewCardModalProps) => {
    const cardName = useInput('');
    const cardAmount = useInput('');

    const handleCreateCard = () => {
      const isValidate = validateForm(cardAmount.value, cardName.value);
      if (!isValidate) {
        return Alert.alert('ERROR', 'you entered invalid data', [{text: 'OK'}]);
      }
      createCard({name: cardName.value, amount: cardAmount.value});
      onCloseModal();
      cardName.onChangeText('');
      cardAmount.onChangeText('');
    };

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onCloseModal}>
        <ModalWrapper>
          <ModalContainer>
            <FormWrapper>
              <Title>New Card</Title>
              <Input labelTitle="Name" {...cardName} keyboardType="numeric" />
              <Input labelTitle="Initial Amount" {...cardAmount} />
            </FormWrapper>
            <Row>
              <AddCardBtn onPress={handleCreateCard}>
                <TouchableText>Ok</TouchableText>
              </AddCardBtn>
            </Row>
          </ModalContainer>
        </ModalWrapper>
        <TouchableWithoutFeedback onPress={onCloseModal}>
          <OutsideView />
        </TouchableWithoutFeedback>
      </Modal>
    );
  },
);
