import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Background from '~/components/Background';

import api from '~/services/api';
import Lista from '~/components/Lista';

import { Container, Title, List } from './styles';

export default function pedidos() {
  
  const [solicitacoes, setSolicitacoes] = useState([]);
  const header = {
    headers: {'ug': '33'}
  };
  useEffect(() => {
    async function loadSolicitacoes(){
      const response = await api.get('pedido/9', header);
      setSolicitacoes(response.data);
    }
    loadSolicitacoes();
  }, []);
  
  return (
    // <Background>
    <Container>
      <Title> Lista de Solicitações </Title>
      <List 
      data={solicitacoes}
      keyExtractor={item => String (solicitacoes.cod_pedido_agenda)}
      renderItem={({ item }) => <Lista data={item}/>}
      />
    </Container>
    // </Background>
  );
}
