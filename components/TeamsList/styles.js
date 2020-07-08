import styled from 'styled-components';
import {View, Text} from 'react-native';

const ItemContainer = styled.View`
  background: #28292c;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.2);
  flex-direction: row;
  padding: 16px;
  justify-content: space-between;
  margin-bottom: 2px;
  width: 100%;
`;

const Name = styled.Text`
  color: #dadfe7;
`;

const Score = styled.Text`
  color: #dadfe7;
`;

export {ItemContainer, Name, Score};
