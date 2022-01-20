import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import PokemonListDTO from '../../dtos/PokemonListDTO';

interface Props {
  color: string;
}

export const Container = styled.View`
  flex: 1
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: 18px;
  margin-left: 24px;
`;

export const ContainerInfo = styled.View`
  margin-top: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px;
`;

export const TypeItem = styled.View<Props>`
  height: 30px;
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: ${({color}) => color};
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
`;

export const NameType = styled.Text`
  text-transform: uppercase;
  color: #000;
  font-size: 15px;
  font-weight: bold;
`;

export const PokemonImages = styled.View`
  margin-top: 32px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 20px;
  margin-bottom: 15px;
  text-transform: capitalize;
  align-self: center;
`;
