import styled from 'styled-components';
import {SafeAreaView, Text} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #121212;
  padding: 16px;
`;

const Title = styled.Text`
  color: #dadfe7;
  font-size: 32px;
  margin: 16px 0;
`

export {Container, Title};
