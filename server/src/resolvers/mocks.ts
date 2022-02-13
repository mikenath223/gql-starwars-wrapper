export const mockPeopleDataResolverResponse = {
  __typename: 'PeopleData',
  count: 82,
  next: 'http://swapi.dev/api/people/?page=2,',
  previous: null,
  people: [
    {
      __typename: 'Person',
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
    },
  ],
};

export const mockPersonResolverResponse = mockPeopleDataResolverResponse.people[0];
