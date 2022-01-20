import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface Props {
  color: string;
}

export const Container = styled(RectButton)<Props>`
  height: 80px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({color}) => color};
  padding: 10px;
  margin-bottom: 12px;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 10px;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerType = styled.View`
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-between;
`;

export const Type = styled.View`
  background-color: ${({ theme }) => theme.colors.text_secondary};
  align-items: center;
  padding: 5px 15px 5px 15px;
  margin-right: 5px;
  border-radius: 10px;

`;

export const ContainerImage = styled.View``;

export const ContainerInfo = styled.View`

`;

export const Id = styled.Text`
  min-width: 60px;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const Name = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_primary};
`;
export const NameType = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
`;
