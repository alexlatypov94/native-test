import React from 'react';
import {TouchableOpacity} from 'react-native';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ICON_SIZE} from '../../constants';

interface AddCardHeaderBtnProps {
  onPressBtn: () => void;
}

export const AddCardHeaderBtn: React.FC<AddCardHeaderBtnProps> = React.memo(
  ({onPressBtn}: AddCardHeaderBtnProps) => {
    return (
      <TouchableOpacity onPress={onPressBtn}>
        <FontAwesomeIcon icon={faPlus} size={ICON_SIZE} />
      </TouchableOpacity>
    );
  },
);
