import React from 'react';
import { TextInputProps } from 'react-native';


import { Container, InputText, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
};

const Input: React.FC<InputProps> = ({ name, icon, ...rest}) => (
  <Container>
    <Icon name={icon} size={20} color="#BAC2C8" />
    <InputText placeholderTextColor="#BAC2C8" {...rest} />
  </Container>
);

export default Input;
