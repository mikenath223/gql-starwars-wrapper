export const mockPeopleResponse = {
  count: 82,
  next: 'http://swapi.dev/api/people/?page=2,',
  previous: null,
  results: [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      gender: 'n/a',
      homeworld: 'http://swapi.dev/api/planets/1/',
    },
    {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      gender: 'n/a',
      homeworld: 'http://swapi.dev/api/planets/8/',
    },
  ],
};

export const mockTransformedPeopleResponse = {
  count: 82,
  next: 'http://swapi.dev/api/people/?page=2,',
  previous: null,
  people: [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      gender: 'n/a',
      homeworld: 'http://swapi.dev/api/planets/1/',
    },
    {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      gender: 'n/a',
      homeworld: 'http://swapi.dev/api/planets/8/',
    },
  ],
};

export const mockPersonResponse = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  gender: 'male',
  homeworld: 'http://swapi.dev/api/planets/1/',
};
