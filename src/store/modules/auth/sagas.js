import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';
//import history from '~/services/history'
import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {sAMAccountName, password} = payload;
    const response = yield call(api.post, 'login', {
      sAMAccountName,
      password,
    });

    const {token, user} = response.data;

    // if(user.provider) {
    //   Alert.alert('Erro no login', 'O usuário não pode ser prestador de serviços');
    //   return;
    // }
    api.defaults.headers.Authorization = `Bearer ${token}`;
    //yield delay (3000);
    yield put(signInSuccess(token, user));
    Alert.alert('Autenticação realizada', 'Token gerado com sucesso!');
    // history.push('./dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Erro no login, verifique seus dados doido',
    );
    yield put(signFailure());
  }
}

// SignUP
// export function* signUp({ payload }) {
//   try{
//     const {name, email, password} = payload;
// yield call(api.post, 'users', {
//   name,
//   email,
//   password,
// });

// // history.push('/');
//   } catch (err) {
//     Alert.alert('Falha no cadastro', 'Erro no cadastro, verifique seus dados');
//     yield put(signFailure());
//   }
// }

export function setToken({payload}) {
  if (!payload) {
    return;
  }
  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  // takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);