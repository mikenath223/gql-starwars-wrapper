import { resolvers } from '../resolvers';
import { mockPeopleDataResolverResponse, mockPersonResolverResponse } from '../resolvers/mocks';

const mockContext: any = {
  dataSources: {
    peopleAPI: {
      getAllPeople: jest.fn(),
      getPersonByName: jest.fn(),
    },
  },
};

describe('[Query.peopleData]', () => {
  const { getAllPeople } = mockContext.dataSources.peopleAPI;

  it('should return all people data', async () => {
    getAllPeople.mockReturnValueOnce(mockPeopleDataResolverResponse);

    const response = await resolvers.Query.peopleData(null, { page: 1, search: '' }, mockContext);
    expect(response).toEqual(mockPeopleDataResolverResponse);
  });

  it('should return errorMessage', async () => {
    getAllPeople.mockReturnValueOnce({ count: 0, people: [] });

    const response = await resolvers.Query.peopleData(
      null,
      { page: 1, search: 'phill' },
      mockContext
    );
    expect(response).toEqual({
      __typename: 'NotFound',
      errorMessage: `People with the name phill do not exist.`,
    });
  });
});

describe('[Query.getPersonByName]', () => {
  const { getPersonByName } = mockContext.dataSources.peopleAPI;

  it('should return person data', async () => {
    getPersonByName.mockReturnValueOnce(mockPersonResolverResponse);

    const response = await resolvers.Query.person(null, { name: '' }, mockContext);
    expect(response).toEqual(mockPersonResolverResponse);
  });

  it('should return errorMessage', async () => {
    getPersonByName.mockReturnValueOnce(undefined);

    const response = await resolvers.Query.person(null, { name: 'Ambit' }, mockContext);
    expect(response).toEqual({
      __typename: 'NotFound',
      errorMessage: `Person with the name Ambit does not exist.`,
    });
  });
});
