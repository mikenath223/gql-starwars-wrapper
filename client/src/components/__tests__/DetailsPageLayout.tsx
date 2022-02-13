import { DetailsPageLayout } from '../DetailsPageLayout';
import { render, cleanup } from '../../test-utils';

describe('DetailsPageLayout', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();

    render(
      <DetailsPageLayout
        errorMessage=""
        renderHeader={() => <div />}
        handleBackButtonClick={onClick}
      >
        <div>Children</div>
      </DetailsPageLayout>
    );
  });
});
