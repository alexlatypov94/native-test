import firestore from '@react-native-firebase/firestore';
import {COLLECTION_NAME} from '../constants';
import {CardDataHistory} from './../types/index';

export const addCardComment = ({
  id,
  amount,
  history,
}: {
  id: string;
  amount: number;
  history: CardDataHistory[];
}) => {
  firestore().collection(COLLECTION_NAME).doc(id).update({
    amount,
    history,
  });
};
