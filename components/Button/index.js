import React from 'react';
import {Container, Title} from './styles';

const Button = props => (
  <Container onPress={props.onPress}>
    <Title>{props.text}</Title>
  </Container>
);

export default Button;
