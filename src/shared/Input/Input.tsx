import React from 'react';
import {KeyboardType} from 'react-native';
import {InputLayout, Label} from '../../layouts';
import {InputWrapper} from './styles';

interface InputProps {
  labelTitle: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: string;
}

export const Input: React.FC<InputProps> = ({
  labelTitle,
  onChangeText,
  value,
  keyboardType,
}: InputProps) => {
  return (
    <InputWrapper>
      <Label>{labelTitle}</Label>
      <InputLayout
        onChangeText={onChangeText}
        value={value}
        keyboardType={(keyboardType as KeyboardType) || 'default'}
      />
    </InputWrapper>
  );
};
