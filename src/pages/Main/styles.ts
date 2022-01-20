import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import PokemonListDTO from '../../dtos/PokemonListDTO';

export const Container = styled.View``;

export const ContainerTitle = styled.View`
  border-radius: 10px;
  padding: 15px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;

 export const PokemonList = styled(FlatList as new () => FlatList<PokemonListDTO>)``;
