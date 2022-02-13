import { PersonCard } from '../PersonCard';
import { render, cleanup } from '../../test-utils';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('PersonCard', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();
    render(
      <PersonCard
        name="Luke Skywalker"
        height="172"
        mass="77"
        homeworld="http://swapi.dev/api/planets/1/"
        gender="Female"
        onClick={onClick}
      />
    );
  });
});
