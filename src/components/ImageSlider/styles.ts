import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface IndexImageProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndex = styled.View<IndexImageProps>`
  width: 6px;
  height: 6px;
  background-color: ${({active}) => active ? '#000' : '#f2f2'};
  margin-left: 8px;
  border-radius: 3px;
`

export const ContainerIndex = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
  margin-top: 0px`

export const PokemonImage = styled.Image`
  width: 280px;
  height: 200px;
`

export const PokemonImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 150px;
  justify-content: center;
  align-items: center;
`

