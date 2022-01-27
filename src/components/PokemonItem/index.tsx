import React, { useEffect, useState, memo, useCallback } from 'react';
import { Alert } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import api from '../../service/api';
import PokemonInfoDTO from '../../dtos/PokemonInfoDTO';
import getColorType from '../../utils/getColorType';

import {
  Container,
  ContainerInfo,
  ContainerType,
  ContainerImage,
  Title,
  Type,
  NameType,
  Image,
  Id,
  Name } from './styles';

interface PokemonListData {
  name: string;
  url: string;
};

interface Props extends RectButtonProps{
  data: PokemonListData;
};

export function PokemonItem({ data, ...rest } : Props) {
  const navigation = useNavigation();
  const [pokemons, setPokemons] = useState<PokemonInfoDTO>();

  const getPokemon = useCallback(async () => {
    try {
      const response = await api.get('/'+data.name);
      setPokemons(response.data)
    } catch (error) {
      console.error('ERROR IN TO GET POKEMONS API :: ', error);
      Alert.alert("Ocorreu um erro ao acessar as informações! Tente novamente mais tarde.");
    }
  }, [data.name])

  function handlePokemonDetail() {
    navigation.navigate('PokemonDetails' as never, pokemons as never);
  };

  useEffect(() => {
    getPokemon();
  }, []);


  return (
    <Container {...rest} onPress={handlePokemonDetail} color={getColorType(pokemons?.types[0] ? pokemons!.types[0].type.name : 'blastoise')}>
        <ContainerInfo>
          <Title>
            {pokemons?.types && pokemons?.types.forEach(item => <Name>{item.type.name}</Name>)}
            <Id>#{pokemons?.id}</Id>
            <Name>{pokemons?.name}</Name>
          </Title>

          <ContainerType>
            {pokemons?.types.map(item => (
              <Type key={item.slot}>
                <NameType>{item.type.name}</NameType>
              </Type>
            ))}
          </ContainerType>

        </ContainerInfo>

        <ContainerImage>
          <Image
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemons?.id}.png`}}
            resizeMode="contain"
          />
        </ContainerImage>
    </Container>
  )
};

export default memo(PokemonItem);
