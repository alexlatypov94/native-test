import firestore from '@react-native-firebase/firestore';
import {COLLECTION_NAME} from '../constants';

export const deleteCard = (id: string) => {
  firestore().collection(COLLECTION_NAME).doc(id).delete();
};
