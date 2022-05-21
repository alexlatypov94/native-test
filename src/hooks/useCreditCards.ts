import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {COLLECTION_NAME} from '../constants';
import {CardData} from './../types/index';

export const useCreditCards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState<CardData[]>([]);
  useEffect(() => {
    setIsLoading(true);
    const subscriber = firestore()
      .collection(COLLECTION_NAME)
      .onSnapshot(documentSnapshot => {
        const data = documentSnapshot.docs.map(el => el.data());
        setCards(data as CardData[]);
        setIsLoading(false);
      });

    return () => subscriber();
  }, []);
  return {isLoading, cards};
};
