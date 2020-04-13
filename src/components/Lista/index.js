import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Avatar from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Info, Name, Local } from './styles';

export default function Lista({ data }) {
  return (
    <Container>
      <Left>
      <Avatar name="assignment"size={40} color="#50008d"/>
      <Info>
        <Name>{data.dsc_titulo_pedido_agenda}</Name>
        <Local>{data.dsc_local_pedido_agenda}</Local>
      </Info>
      </Left>
    
      <TouchableOpacity onPress={() => {}}>
      <Icon name="options-vertical" size={20} color="#000000"/>
      </TouchableOpacity>
    </Container>
  );
}
