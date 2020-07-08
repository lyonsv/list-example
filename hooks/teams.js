import {useState, useEffect} from 'react';
import {teams as teamsApi} from '../services/api';

const groupBy = (array, key) =>
  array.reduce((accumulator, currentValue) => {
    let currentKey = currentValue[key];
    let currentObject = accumulator.filter(value => {
      return value.name === currentKey;
    });

    if (currentObject.length) {
      currentObject[0].scores.push(currentValue.score);
    } else {
      accumulator.push({
        name: currentKey,
        scores: [currentValue.score],
        groupedByScores: true,
      });
    }

    return accumulator;
  }, []);

const useTeams = () => {
  const [teams, setTeams] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadTeams = async () => {
    const newTeams = await teamsApi.get();
    setTeams(newTeams);
    setLoading(false);
  };

  const teamsByScore = async () => {
    const newTeams = await teamsApi.get();
    const byScore = newTeams.sort((a, b) => {
      return a.score < b.score ? 1 : -1;
    });
    setTeams(byScore);
    setFiltered({selected: true});
  };

  const groupByTeam = async () => {
    const newTeams = await teamsApi.get();
    const unique = groupBy(newTeams, 'name');
    setTeams(unique);
    setFiltered({selected: true});
  };

  const reset = async () => {
    const newTeams = await teamsApi.get();
    setTeams(newTeams);
    setFiltered({selected: true});
  };

  useEffect(() => {
    loadTeams();
  }, []);

  return {
    loading,
    teams,
    teamsByScore,
    groupByTeam,
    reset,
  };
};

export default useTeams;
