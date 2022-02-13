import { createTestClient } from 'apollo-server-testing';

import { createMockTestServer } from '../test_utils';
import { mockPeopleResponse } from '../datasources/people/mocks';
import { GET_PEOPLE_DATA, GET_PERSON_DETAILS_BY_NAME } from '../test_queries';

describe('Queries', () => {
  it('should fetch all people', async () => {
    const { server, peopleAPI } = createMockTestServer();

    (peopleAPI as any).get = jest.fn(() => [mockPeopleResponse]);

    const { query } = createTestClient(server);
    const response = await query({ query: GET_PEOPLE_DATA });

    expect(response).toMatchSnapshot();
  });

  it('should fetch a person by name', async () => {
    const { server, peopleAPI } = createMockTestServer();

    (peopleAPI as any).get = jest.fn(() => [mockPeopleResponse]);

    const { query } = createTestClient(server);
    const response = await query({
      query: GET_PERSON_DETAILS_BY_NAME,
      variables: { name: 'Luke Skywalker' },
    });

    expect(response).toMatchSnapshot();
  });
});
