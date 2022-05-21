import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useCreditCards} from '../../hooks';
import {CardData} from '../../types';
import {
  CardName,
  CardValue,
  ImageView,
  PluseIcon,
  PlusImage,
  PlusWrapper,
  ProcessBtn,
} from './styles';

interface SliderProp {
  onOpenModal: (id: string) => () => void;
  setActiveCard: (data: CardData) => void;
  onOpenNewCardModal: () => void;
}

const {width: screenWidth} = Dimensions.get('window');

export const Slider: React.FC<SliderProp> = React.memo(
  ({onOpenModal, setActiveCard, onOpenNewCardModal}: SliderProp) => {
    const carouselRef = useRef<Carousel<any>>(null);
    const {cards} = useCreditCards();

    const modifyCards = useMemo(() => {
      return [...cards, {plus: true}];
    }, [cards]);

    useEffect(() => {
      setActiveCard(cards[carouselRef?.current?.currentIndex as number]);
    }, [cards, setActiveCard]);

    const renderItem = useCallback(
      ({item}) => {
        return item.plus ? (
          <PlusWrapper onPress={onOpenNewCardModal}>
            <PlusImage
              source={require('./../../assets/images/credit-card.png')}
              resizeMode="cover"
            />
            <PluseIcon icon={faCirclePlus} size={100} color="white" />
          </PlusWrapper>
        ) : (
          <ImageView
            source={require('./../../assets/images/credit-card.png')}
            resizeMode="cover">
            <CardName>{item.name}</CardName>
            <CardValue>{item.amount}</CardValue>
            <ProcessBtn onPress={onOpenModal(item.id)}>
              <CardName>Process</CardName>
            </ProcessBtn>
          </ImageView>
        );
      },
      [onOpenModal, onOpenNewCardModal],
    );

    const onSnap = (index: number) => {
      setActiveCard(cards[index]);
    };

    return (
      <Carousel
        ref={carouselRef}
        data={modifyCards}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 100}
        onSnapToItem={onSnap}
      />
    );
  },
);
