import { TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background:  ${({ theme }) => theme.colors.background_secondary};
  border-radius: 30px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 18px;
`;

export const Icon = styled(EvilIcons)`
  margin-right: 16px;
`;
