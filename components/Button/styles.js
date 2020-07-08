import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';

const Container = styled.TouchableOpacity`
  background: #543fd7;
  padding: 8px 32px;
  margin-bottom: 16px;
  border-radius: 5px;
`;
const Title = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
`;

export {Container, Title};
