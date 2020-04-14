import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Background from '~/components/Background';

import api from '~/services/api';
import ListaAgenda from '~/components/ListaAgenda';

import { Container, Title, List } from './styles';

export default function Home() {
  
  const [agenda, setAgenda] = useState([]);
  const header = {
    headers: {'ug': '33'}
  };
  useEffect(() => {
    async function loadAgenda(){
      const response = await api.get('agendaporug/2020-03-26', header);
      setAgenda(response.data);
    }
    loadAgenda();
  }, []);
  
  return (
    // <Background>
    <Container>
      <Title> Lista de Agendas por dia </Title>
      <List 
      data={agenda}
      keyExtractor={item => String (agenda.cod_agenda)}
      renderItem={({ item }) => <ListaAgenda data={item}/>}
      />
    </Container>
    // </Background>
  );
}
