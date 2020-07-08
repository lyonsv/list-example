import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Title} from './styles';
import useTeams from '../../hooks/teams';
import TeamsList from '../../components/TeamsList';
import Button from '../../components/Button';

const Teams = () => {
  const {
    loading,
    teams,
    filtered,
    groupByTeam,
    teamsByScore,
    reset,
  } = useTeams();

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Title>Teams</Title>
      <TeamsList
        reset={reset}
        loading={loading}
        teams={teams}
        filtered={filtered}
      />
      <Button onPress={() => groupByTeam()} text="Group By Team" />
      <Button onPress={() => teamsByScore()} text="Sort by Score" />
    </Container>
  );
};

export default Teams;
