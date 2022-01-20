import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/core';

import PokemonInfoDTO from '../../dtos/PokemonInfoDTO';
import ImageSlider from '../../components/ImageSlider';
import BackButton from '../../components/BackButton';
import getColorType from '../../utils/getColorType';

import { Container,
  Header,
  Name,
  PokemonImages,
  ContainerInfo,
  SubTitle,
  TypeItem,
  NameType
} from './styles';

const PokemonDetails: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = route.params as PokemonInfoDTO;

  return (
    <Container>
      <Header>
        <BackButton color="#000" size={40}onPress={() => {navigation.goBack()}}/>
      </Header>
      <PokemonImages>
        <ImageSlider imagesUrl={[`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data?.id}.png`]}/>
      </PokemonImages>

      <ContainerInfo>
        <Name>{data.name}</Name>
      </ContainerInfo>

      <ContainerInfo>
        <SubTitle>Tipo</SubTitle>
        {data?.types.map(item => (
            <TypeItem key={item.slot} color={getColorType(item.type.name)}>
              <NameType>{item.type.name}</NameType>
            </TypeItem>
          ))}
      </ContainerInfo>

      <ContainerInfo>
        <SubTitle>Habilidades</SubTitle>
        {data?.abilities.map(item => (
            <TypeItem key={item.slot} color={'#9CD5FE'}>
              <NameType>{item.ability.name}</NameType>
            </TypeItem>
          ))}
      </ContainerInfo>

    </Container>
  )
};

export default PokemonDetails;
