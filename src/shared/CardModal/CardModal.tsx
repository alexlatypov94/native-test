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
import {CardData} from '../../types';
import {addCardComment, validateForm} from '../../utils';
import {Input} from '../Input';
import {ExpenseButton, IncomeButton} from './styles';

interface CardModalProps {
  isVisible: boolean;
  onCloseModal: () => void;
  activeCard: CardData;
}

export const CardModal: React.FC<CardModalProps> = React.memo(
  ({isVisible, onCloseModal, activeCard}: CardModalProps) => {
    const amount = useInput('');
    const comment = useInput('');

    const handleChangeAmount = (isIncome: boolean) => () => {
      const checkValid = validateForm(amount.value, comment.value);

      if (!checkValid) {
        return Alert.alert('ERROR', 'you entered invalid data', [{text: 'OK'}]);
      }

      const historyData = activeCard?.history || [];
      const resultAmount = isIncome
        ? parseInt(activeCard.amount, 10) + parseInt(amount.value, 10)
        : parseInt(activeCard.amount, 10) - parseInt(amount.value, 10);

      const sortedHistory = [
        ...historyData,
        {
          amount: amount.value,
          comment: comment.value,
          isIncome,
          date: new Date(),
        },
      ]
        .slice(0)
        .sort(
          (a, b) =>
            new Date(b?.date).getMilliseconds() -
            new Date(a?.date).getMilliseconds(),
        );
      const data = {
        id: activeCard.id,
        amount: resultAmount,
        history: sortedHistory,
      };

      addCardComment(data);
      handleCloseModal();
    };

    const handleCloseModal = () => {
      onCloseModal();
      amount.onChangeText('');
      comment.onChangeText('');
    };

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={handleCloseModal}>
        <ModalWrapper>
          <ModalContainer>
            <FormWrapper>
              <Title>{activeCard?.name}</Title>
              <Input labelTitle="Amount" {...amount} keyboardType="numeric" />
              <Input labelTitle="Comment" {...comment} />
            </FormWrapper>
            <Row>
              <IncomeButton onPress={handleChangeAmount(true)}>
                <TouchableText>Income</TouchableText>
              </IncomeButton>
              <ExpenseButton onPress={handleChangeAmount(false)}>
                <TouchableText>Expense</TouchableText>
              </ExpenseButton>
            </Row>
          </ModalContainer>
        </ModalWrapper>
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <OutsideView />
        </TouchableWithoutFeedback>
      </Modal>
    );
  },
);
