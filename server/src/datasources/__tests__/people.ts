import { PeopleAPI } from '../people';
import {
  mockPeopleResponse,
  mockTransformedPeopleResponse,
  mockPersonResponse,
} from '../people/mocks';

const mocks = {
  get: jest.fn(),
};

const peopleAPI = new PeopleAPI();
(peopleAPI as any).get = mocks.get;

describe('[PeopleAPI.getPerson]', () => {
  it('should transform people API results', () => {
    expect(peopleAPI.getPeopleData(mockPeopleResponse as any)).toEqual(
      mockTransformedPeopleResponse
    );
  });
});

describe('[PeopleAPI.getAllPeople]', () => {
  it('should fetch all people from api', async () => {
    mocks.get.mockReturnValueOnce(mockPeopleResponse);
    const response = await peopleAPI.getAllPeople();

    expect(response).toEqual(mockTransformedPeopleResponse);
    expect(mocks.get).toBeCalledWith('people', { page: 1, search: '' });
  });
});

describe('[PeopleAPI.getPersonByName]', () => {
  it('should fetch person by name', async () => {
    mocks.get.mockReturnValueOnce(mockPeopleResponse);
    const response = await peopleAPI.getPersonByName('luke');

    expect(response).toEqual(mockPersonResponse);
    expect(mocks.get).toBeCalledWith('people', { search: 'luke' });
  });
});
