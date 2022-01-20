import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container, Icon } from './styles';

interface Props extends BorderlessButtonProps{
  color: string;
  size: number;
};

export default function BackButton ({ color, size , ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name="chevron-left" size={size} color={color} />
    </Container>
  )
};
