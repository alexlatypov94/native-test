import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import {Wrapper, BackgroundGradient, SafeView, Divider} from '../../layouts';
import {CardModal, NewCardModal, Slider} from '../../shared';
import {CardData, CardDataHistory} from '../../types';
import {Comment, CommentAmount, CommentRow} from './styles';

const keyExtractor = (item: CardDataHistory, index: number) =>
  item.amount + index;

export const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newCardVisible, setNewCardVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<CardData>({} as CardData);

  const handleOpenModal = useCallback(
    () => () => {
      setModalVisible(!modalVisible);
    },
    [modalVisible],
  );

  const handleNewCardModal = useCallback(() => {
    console.log('called');
    setNewCardVisible(!newCardVisible);
  }, [newCardVisible]);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const renderItem = useCallback(({item}) => {
    const mark = item.isIncome ? '+' : '-';
    return (
      <CommentRow>
        <Comment>{item.comment}</Comment>
        <CommentAmount
          isIncome={item.isIncome}>{`${mark}${item.amount}$`}</CommentAmount>
      </CommentRow>
    );
  }, []);

  return (
    <SafeView>
      <BackgroundGradient>
        <Slider
          onOpenModal={handleOpenModal}
          setActiveCard={setActiveCard}
          onOpenNewCardModal={handleNewCardModal}
        />
        <Wrapper>
          <FlatList
            data={activeCard?.history}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={Divider}
          />
        </Wrapper>
        <CardModal
          isVisible={modalVisible}
          onCloseModal={handleCloseModal}
          activeCard={activeCard}
        />
        <NewCardModal
          isVisible={newCardVisible}
          onCloseModal={handleNewCardModal}
        />
      </BackgroundGradient>
    </SafeView>
  );
};
