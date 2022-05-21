import firestore from '@react-native-firebase/firestore';
import {COLLECTION_NAME} from '../constants';

export const createCard = ({name, amount}: {name: string; amount: string}) => {
  const id = Date.now().toString();
  firestore()
    .collection(COLLECTION_NAME)
    .doc(id)
    .set({
      id,
      name,
      amount,
    })
    .then(() => {
      console.log('card added!');
    });
};
