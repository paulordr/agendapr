import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  background: #FFF;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 18px;
`;
