import { Snackbar } from '../Snackbar';
import { render, cleanup } from '../../test-utils';

describe('Snackbar', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();

    render(
      <Snackbar active={true} actionLabel="" onClick={onClick}>
        Displayed message
      </Snackbar>
    );
  });
});
