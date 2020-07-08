import React from 'react';
import {ItemContainer, Name, Score} from './styles';

const Item = props => {
  if (props.data.groupedByScores) {
    return (
      <ItemContainer>
        <Name>{props.data.name}</Name>
        <Score>{props.data.scores.join()}</Score>
      </ItemContainer>
    );
  }

  return (
    <ItemContainer>
      <Name>{props.data.name}</Name>
      <Score>{props.data.score}</Score>
    </ItemContainer>
  );
};

export default Item;
