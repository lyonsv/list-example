const mockData = [
  {name: 'Cubs', score: 2},
  {name: 'Yankees', score: 5},
  {name: 'Mets', score: 0},
  {name: 'Cubs', score: 3},
  {name: 'Yankees', score: 2},
  {name: 'Mets', score: 1},
  {name: 'Cubs', score: 2},
  {name: 'Yankees', score: 1},
  {name: 'Mets', score: 3},
];

const teams = {
  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(mockData), 250);
    });
  },
};

export {teams};
