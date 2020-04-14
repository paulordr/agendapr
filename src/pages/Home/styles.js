import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 150px;
`;
export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: true,
    contentContainerStyle: { padding: 30 },
})`
`;