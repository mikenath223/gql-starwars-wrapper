import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { InMemoryCache } from '@apollo/client';

import { renderApollo, cleanup, screen, fireEvent, waitFor } from '../../test-utils';

import { GET_PERSON_DETAILS_BY_NAME, PersonDetails } from '../PersonDetails';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useParams: () => ({
    name: 'Sky Walker',
  }),
}));

const mockPerson = {
  name: 'Sky Walker',
  height: '178',
  mass: '120',
  gender: 'male',
  homeworld: 'http://swapi.dev/api/planets/1/',
};

describe('PersonDetails', () => {
  afterEach(cleanup);

  describe('with data', () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_PERSON_DETAILS_BY_NAME,
          variables: {
            name: 'Sky Walker',
          },
        },
        result: {
          data: {
            person: mockPerson,
          },
        },
      },
    ];

    it('renders without error', () => {
      renderApollo(
        <MemoryRouter>
          <PersonDetails />
        </MemoryRouter>,
        { mocks, cache }
      );
    });

    it('should be able to click on home world link', async () => {
      renderApollo(
        <MemoryRouter>
          <PersonDetails />
        </MemoryRouter>,
        { mocks, cache }
      );

      await waitFor(() => {
        fireEvent.click(screen.getByText('Home world'));
      });
    });

    it('should display avatar with letter A when name is null', async () => {
      const cache = new InMemoryCache({ addTypename: false });
      const mocks = [
        {
          request: {
            query: GET_PERSON_DETAILS_BY_NAME,
            variables: {
              name: 'Sky Walker',
            },
          },
          result: {
            data: {
              person: {
                ...mockPerson,
                name: '',
              },
            },
          },
        },
      ];
      renderApollo(
        <MemoryRouter>
          <PersonDetails />
        </MemoryRouter>,
        { mocks, cache }
      );

      await waitFor(() => {
        expect(screen.getByText('A')).toBeInTheDocument();
      });
    });
  });
});
