import React from 'react';
import {ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native';
import Item from './Item';

const TeamsList = props => {
  if (props.loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      style={{width: '100%', padding: 16}}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      data={props.teams}
      refreshing={props.loading}
      onRefresh={() => props.reset()}
      extraData={props.filtered}
      renderItem={({item}) => <Item data={item} />}
      extraData={props.teams}
    />
  );
};

export default TeamsList;
