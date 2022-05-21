import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import {Title} from '../../layouts';

export const ImageView = styled.ImageBackground`
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  flex: 1;
` as unknown as typeof ImageBackground;

export const CardName = styled(Title)`
  color: #fff;
`;
export const CardValue = styled(Title)`
  color: #fff;
  margin: 20px 0;
`;

export const ProcessBtn = styled.TouchableOpacity`
  border: 1px solid #fff;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const PlusWrapper = styled.TouchableOpacity`
  flex: 1;
  position: relative;
`;

export const PlusImage = styled(ImageView)`
  opacity: 0.5;
`;

export const PluseIcon = styled(FontAwesomeIcon)`
  opacity: 0.9;
  position: absolute;
  top: 35%;
  left: 35%;
`;
