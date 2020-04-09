import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import Lista from '~/components/Lista';

import { Container, Title, List } from './styles';

export default function pedidos() {
  
  const [solicitacoes, setSolicitacoes] = useState([]);
  
  useEffect(() => {
    async function loadSolicitacoes(){
      const response = await api.get('pedidos');
      setSolicitacoes(response.data);
    }
    loadSolicitacoes();
  }, []);
  
  return (
    <Container>
      <Title> Lista de Solicitações </Title>
      <List 
      data={solicitacoes}
      keyExtractor={item => String (solicitacoes.id)}
      renderItem={({ item }) => <Lista data ={item}/>}
      />
    </Container>
  );
}
