import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useCreditCards} from '../../hooks';
import {BackgroundGradient, Divider, SafeView, Wrapper} from '../../layouts';
import {AddCardHeaderBtn, NewCardModal, PreLoader} from '../../shared';
import {CardData} from '../../types';
import {deleteCard} from '../../utils';
import {CardName, ListRow} from './styles';

const keyExtractor = (item: CardData) => item.id;

export const Settings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const {cards, isLoading} = useCreditCards();

  const handleModalVisible = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <AddCardHeaderBtn onPressBtn={handleModalVisible} />,
    });
  }, [handleModalVisible, navigation]);

  const handleDeleteCard = useCallback(
    (id: string) => () => {
      deleteCard(id);
    },
    [],
  );

  const renderItem = useCallback(
    ({item}) => {
      return (
        <ListRow>
          <CardName>{item.name}</CardName>
          <TouchableOpacity onPress={handleDeleteCard(item.id)}>
            <FontAwesomeIcon icon={faTrashCan} size={30} color="red" />
          </TouchableOpacity>
        </ListRow>
      );
    },
    [handleDeleteCard],
  );

  return (
    <SafeView>
      <BackgroundGradient>
        <Wrapper>
          {isLoading ? (
            <PreLoader />
          ) : (
            <FlatList
              data={cards}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              ItemSeparatorComponent={Divider}
            />
          )}
        </Wrapper>
        <NewCardModal
          isVisible={modalVisible}
          onCloseModal={handleModalVisible}
        />
      </BackgroundGradient>
    </SafeView>
  );
};
