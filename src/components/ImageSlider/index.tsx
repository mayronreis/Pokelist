import React from 'react';

import { Container, ImageIndex, ContainerIndex, PokemonImageWrapper, PokemonImage } from './styles';

interface Props {
  imagesUrl: string[];
};

export default function ImageSlider({imagesUrl}: Props) {
  return (
    <Container>
      <ContainerIndex>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
      </ContainerIndex>

      <PokemonImageWrapper>
        <PokemonImage
          source={{uri: imagesUrl[0]}}
          resizeMode="contain"
        />
      </PokemonImageWrapper>
    </Container>
  )
};


