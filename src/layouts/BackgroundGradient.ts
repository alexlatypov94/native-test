import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const BackgroundGradient = styled(LinearGradient).attrs({
  colors: ['rgba(250, 255, 6, 1)', 'rgba(255, 255, 255, 1)'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  flex: 1;
`;
