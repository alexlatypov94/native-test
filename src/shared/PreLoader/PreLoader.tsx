import React from 'react';
import {ActivityIndicator} from 'react-native';
import {IndicatorWrapper} from './styles';

export const PreLoader = () => {
  return (
    <IndicatorWrapper>
      <ActivityIndicator color="green" size={30} />
    </IndicatorWrapper>
  );
};
