import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  margin-top: 100px;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 60px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const Text = styled.Text`
  margin-top: 100px;  
  margin-bottom: 1px;
  font-size: 14px;
  color: #fff;
  align-self: center;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`;
