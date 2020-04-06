import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import logo from '~/assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';

import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [sAMAccountName, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(state => state.auth.loading);


function handleSubmit(){
  dispatch(signInRequest(sAMAccountName, password));
};

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="perm-identity"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu login"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={sAMAccountName}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          {/* loading={loading} */}
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
        {/* <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText> Criar conta gratuita </SignLinkText>
        </SignLink> */}
        {/* <Text> Diretoria de Tecnologia - Presidência da República </Text> */}
      </Container>
    </Background>
  );
}
