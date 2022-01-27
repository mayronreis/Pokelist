import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Alert } from 'react-native';

import api from '../../service/api';
import PokemonItem from '../../components/PokemonItem';
import Input from '../../components/Input';
import PokemonListDTO from '../../dtos/PokemonListDTO';

import { Container, PokemonList, Loading, Title, ContainerTitle } from './styles';

const Main: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonListDTO>();
  const [page, setPage] = useState(20);
  const [search, setSearch] = useState('');
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);

  async function loadPage(pageNumber: number = page) {
    if (totalElements && pageNumber > totalElements) return;

    try {
      setLoading(true);
      const response = await api.get(`/?limit=${page}`);
      setPokemons(response.data)
      setTotalElements(pokemons?.count!);
      setPage(pageNumber + 20);
      setLoading(false);
    } catch (error) {
      console.error('ERROR IN TO GET POKEMONS API :: ', error);
      Alert.alert("Ocorreu um erro ao acessar as informações! Tente novamente mais tarde.");
    }
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
      <SafeAreaView>
        <ContainerTitle>
          <Title>PokeList</Title>
          <Input
          name="search"
          icon="search"
          placeholder="Qual pokemon você procura?"
          onChangeText={(value) => {
            setSearch(value)
          }} />
        </ContainerTitle>
        <Container>
          <FlatList
            data={pokemons?.results}
            keyExtractor={(pokemon) => pokemon.name}
            onEndReached={() => loadPage()}
            onEndReachedThreshold={0.1}
            ListFooterComponent={loading as any && <Loading />}
            renderItem={({item}) => <PokemonItem data={item}/>}
          />
        </Container>
      </SafeAreaView>
  )
};

export default Main;
